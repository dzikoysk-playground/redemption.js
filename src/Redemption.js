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