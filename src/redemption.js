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

var RedemptionTemplate = require('./redemption_template.js');
var RedemptionContent = require('./redemption_content.js');
var RedemptionBuilder = require('./redemption_builder.js');

function Redemption() {
    this.content = new RedemptionContent();
}

Redemption.prototype.amen = function (parentElement) {
    var builder = new RedemptionBuilder(this.content);
    builder.prepare();
    builder.apply(parentElement);
};

Redemption.prototype.getContent = function () {
    return this.content;
};

module.exports = Redemption;
