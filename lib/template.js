/*
MIT License

Copyright (c) 2019-2022 Anthony Beaumont

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import * as ps1 from "./template/ps1.js";
import * as toastXML from "./template/xml.js";

function generate(options, powerShell, legacy) {

  let template = "";
  
  if (powerShell){
    template += ps1.header(options.appID);
    template += legacy ? ps1.legacy(options) : ps1.body(options);
  }
  else {
    template += legacy ? toastXML.legacy(options) : toastXML.body(options);
  }
  
  return template;
}

import { normalize } from "./option.js";

function makeXML(option = {}){

  const legacy = option.legacy || false;
  delete option.legacy;
  
  const options = normalize(option, legacy);
  const template = legacy ? toastXML.legacy(options) : toastXML.body(options);
  return template;
}

export { generate, makeXML };