(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Redemption = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * Copyright (c) 2016 Dzikoysk
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

function RedemptionObjectModel() {
    this.placeholderManager = new Redemption.PlaceholderManager();
}

RedemptionFactory.prototype.applyTo = function (parentElement) {

};

RedemptionFactory.prototype.getPlaceholderManager = function () {
    return this.placeholderManager;
};

module.exports = RedemptionObjectModel;
},{}],2:[function(require,module,exports){
/*
 * Copyright (c) 2016 Dzikoysk
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

function Component(element) {
    this.element = element;
    this.children = [];
}

Component.prototype.addChild = function (component) {
    this.children.push(component);
};

Component.prototype.getElement = function () {
    return this.element;
};

module.exports = Component;

},{}],3:[function(require,module,exports){
/*
 * Copyright (c) 2016 Dzikoysk
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

function BeforeLoadListener() {
    this.actions = [];

    var actions = this.actions;
    document.onreadystatechange = function(e) {
        if (!document.readyState === 'complete') {
            return;
        }

        actions.forEach(function (action) {
            action();
        });
    };
}

BeforeLoadListener.prototype.registerAction = function (action) {
    this.actions.push(action);
};

module.exports = BeforeLoadListener;


},{}],4:[function(require,module,exports){
/*
 * Copyright (c) 2016 Dzikoysk
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

function PlaceholderManager() {
    this.placeholders = {};
}

PlaceholderManager.prototype.fill = function (template) {

};

PlaceholderManager.prototype.register = function (name, handler) {
    this.placeholders[name] = handler;
};

module.exports = PlaceholderManager;
},{}],5:[function(require,module,exports){
/*
 * Copyright (c) 2016 Dzikoysk
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

var BeforeLoadListener = require('./listener/BeforeLoadListener.js');

function Redemption() {
    this.version = '0.0.1-indev-SNAPSHOT';
    this.beforeLoadListener = new BeforeLoadListener();
}

Redemption.prototype.getBeforeLoadListener = function () {
    return this.beforeLoadListener;
};

Redemption.Component = require('./content/Component.js');
Redemption.PlaceholderManager = require('./management/PlaceholderManager.js');
Redemption.RedemptionObjectModel = require('./RedemptionObjectModel.js');

module.exports = Redemption;
},{"./RedemptionObjectModel.js":1,"./content/Component.js":2,"./listener/BeforeLoadListener.js":3,"./management/PlaceholderManager.js":4}]},{},[5])(5)
});