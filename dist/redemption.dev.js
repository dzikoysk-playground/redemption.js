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

function Redemption() {
    this.version = '0.0.1-indev-SNAPSHOT';
}

Redemption.RedemptionTemplate = require('./redemption_template.js');
Redemption.RedemptionContent = require('./redemption_content.js');
Redemption.RedemptionBuilder = require('./redemption_builder.js');
Redemption.RedemptionFactory = require('./redemption_factory.js');
Redemption.RedemptionObjectModel = require('./redemption_object_model.js');
Redemption.Component = require('./content/component.js');

module.exports = Redemption;
},{"./content/component.js":1,"./redemption_builder.js":3,"./redemption_content.js":4,"./redemption_factory.js":5,"./redemption_object_model.js":6,"./redemption_template.js":7}],3:[function(require,module,exports){
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

function RedemptionBuilder(content) {
    this.content = content;
}

RedemptionBuilder.prototype.prepare = function () {

};

RedemptionBuilder.prototype.apply = function (parentElement) {

};

module.exports = RedemptionBuilder;

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

function RedemptionContent() {
    this.elements = {};
}

RedemptionContent.prototype.add = function (element) {
    this.elements.push(element);
};

RedemptionContent.prototype.getElements = function () {
    return this.elements;
};

module.exports = RedemptionContent;

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

function RedemptionFactory() {
}

RedemptionFactory.prototype.create = function (template) {
    return new RedemptionObjectModel(template);
};

module.exports = RedemptionFactory;
},{}],6:[function(require,module,exports){
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

function RedemptionObjectModel(template) {
    this.template = template;
    this.content = new Redemption.RedemptionContent();
}

RedemptionFactory.prototype.amen = function (parentElement) {
    var builder = new RedemptionBuilder(this.content);
    builder.prepare();
    builder.apply(parentElement);
};

module.exports = RedemptionObjectModel;
},{}],7:[function(require,module,exports){
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

var RedemptionTemplate = function RedemptionTemplate() {
    this.declarations = [];
};

RedemptionTemplate.prototype.declaration = function (declaration) {
    this.declarations.push(declaration);
    return this;
};

module.exports = RedemptionTemplate;

},{}]},{},[2])(2)
});