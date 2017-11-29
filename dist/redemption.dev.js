(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Redemption = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * Copyright (c) 2016-2017 Dzikoysk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var RedemptionObjectModel = require('./RedemptionObjectModel.js');
var Component = require('./content/Component.js');

function Redemption() {
    this.version = '0.0.1-indev';
    this.modificationsEnabled = false;
    this.dependenciesLoaded = true;
    this.onloadCallback = function() {};
}

Redemption.prototype.render = function () {
    if (this.rom == undefined) {
        throw new Error('RedemptionObjectModel (ROM) is not prepared');
    }

    this.rom.render();
};

Redemption.prototype.loadDependencies = function (parent, dependencies) {
    var dependenciesCount = this.dependenciesCount == undefined ? 0 : this.dependenciesCount;
    this.dependenciesLoaded = false;
    var that = this;

    dependencies.forEach(function (dependency) {
        var script = document.createElement("script");
        script.src = parent + dependency;

        var callback = function () {
            --dependenciesCount;

            if (dependenciesCount == 0) {
                that.onloadCallback();
            }
        };
        script.onreadystatechange = callback;
        script.onload = callback;

        ++dependenciesCount;
        document.head.appendChild(script);
    });
};

Redemption.prototype.onload = function (callback) {
    this.onloadCallback = callback;

    if (this.dependenciesLoaded) {
        callback();
    }
};

Redemption.prototype.initializeStructure = function (structure) {
    if (!this.modificationsEnabled) {
        throw new Error("Cannot modify the structure");
    }

    this.rom = new RedemptionObjectModel(this, structure);
};

Redemption.prototype.enableModifications = function () {
    this.modificationsEnabled = true;
};

Redemption.prototype.disableModifications = function () {
    this.modificationsEnabled = false;
};

Redemption.prototype.getRedemptionObjectModel = function () {
    return this.rom;
};

Redemption.Component = Component;

module.exports = Redemption;
},{"./RedemptionObjectModel.js":2,"./content/Component.js":3}],2:[function(require,module,exports){
/*
 * Copyright (c) 2016-2017 Dzikoysk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function RedemptionObjectModel(redemption, structure) {
    this.redemption = redemption;
    this.component = new Redemption.Component(redemption, 'body', structure);
}

RedemptionObjectModel.prototype.render = function () {
    var bodyElement = document.querySelector('body');
    this.component.setElement(bodyElement);
    this.component.render();
};

module.exports = RedemptionObjectModel;
},{}],3:[function(require,module,exports){
/*
 * Copyright (c) 2016-2017 Dzikoysk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function Component(redemption, tag, structure) {
    this.redemption = redemption;
    this.structure = structure;
    this.element = document.createElement(tag);
}

Component.prototype.render = function (parentComponent) {
    this.renderedStructure = {};

    for (var node in this.structure) {
        var ComponentController = this.structure[node];

        var componentInstance = new ComponentController(this.redemption, this);
        this.renderedStructure[node] = componentInstance;

        if (componentInstance.create != undefined) {
            componentInstance.create(this.redemption, this);
        }

        if (componentInstance.render != undefined) {
            componentInstance.render(this.redemption, this);
        }
    }

    if (parentComponent == undefined) {
        return;
    }

    parentComponent.getElement().appendChild(this.element);
};

Component.prototype.setElement = function (element) {
    this.element = element;
};

Component.prototype.getElement = function () {
    return this.element;
};

module.exports = Component;

},{}]},{},[1])(1)
});