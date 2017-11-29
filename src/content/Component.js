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
