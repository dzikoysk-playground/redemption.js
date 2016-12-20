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