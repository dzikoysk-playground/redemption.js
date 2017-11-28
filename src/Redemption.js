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

var RedemptionObjectModel = require('./RedemptionObjectModel.js');

function Redemption() {
    this.version = 'indev-0.0.1-SNAPSHOT';
    this.modificationsEnabled = false;
    this.dependenciesLoaded = true;
    this.onloadCallback = function() {};
}

Redemption.prototype.render = function () {
    
}

Redemption.prototype.loadDependencies = function (parent, dependencies) {
    this.dependenciesLoaded = false;
    this.dependencies = this.dependencies == undefined ? 0 : this.dependencies;
    var dependenciesCount = 0;
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

    this.rom = new RedemptionObjectModel(structure);
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

Redemption.Component = require('./content/Component.js');

module.exports = Redemption;