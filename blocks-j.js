//multiline text

//console log
Blockly.Blocks["consolelog"] = {
  init: function () {
    this.appendValueInput("message")
      .setCheck(null)
      .appendField("Console")
      .appendField(
        new Blockly.FieldDropdown([
          ["Log", "log"],
          ["Warn", "warn"],
          ["Error", "error"],
        ]),
        "NAME"
      );
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Logs any input to the console");
    this.setHelpUrl(
      "https://developer.mozilla.org/en-US/docs/Web/API/Console/log"
    );
  },
};
javascript.javascriptGenerator.forBlock["consolelog"] = function (
  block,
  generator
) {
  var dropdown_name = block.getFieldValue("NAME");
  var value_message = generator.valueToCode(
    block,
    "message",
    javascript.Order.ATOMIC
  );
  var code = "console." + dropdown_name + "(" + value_message + ");\n";
  return code;
};
//change background color
Blockly.Blocks["change_background_color"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("change background color of element");
    this.appendValueInput("COLOR").setCheck("Colour").appendField("to color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Change the background color of an HTML element");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["change_background_color"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var color = Blockly.JavaScript.valueToCode(
    block,
    "COLOR",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = element + ".style.backgroundColor = " + color + ";\n";
  return code;
};
//set text content
Blockly.Blocks["set_text_content"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("set text content of element");
    this.appendValueInput("TEXT").setCheck("String").appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Set the text content of an HTML element");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["set_text_content"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var text = Blockly.JavaScript.valueToCode(
    block,
    "TEXT",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = element + ".textContent = " + text + ";\n";
  return code;
};
//add css class
Blockly.Blocks["add_css_class"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("add CSS class");
    this.appendValueInput("CLASS").setCheck("String").appendField("to element");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Add a CSS class to an HTML element");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["add_css_class"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var cssClass = Blockly.JavaScript.valueToCode(
    block,
    "CLASS",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = element + ".classList.add(" + cssClass + ");\n";
  return code;
};

//show element
Blockly.Blocks["show_element"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("show element");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Show an HTML element");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["show_element"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = element + ".style.display = 'block';\n";
  return code;
};
//hide element
Blockly.Blocks["hide_element"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("hide element");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Hide an HTML element");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["hide_element"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = element + ".style.display = 'none';\n";
  return code;
};
//set attribute
Blockly.Blocks["set_attribute"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("set attribute");
    this.appendValueInput("ATTRIBUTE").setCheck("String").appendField("to");
    this.appendValueInput("VALUE").setCheck("String").appendField("with value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Set an attribute and its value for an HTML element");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["set_attribute"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var attribute = Blockly.JavaScript.valueToCode(
    block,
    "ATTRIBUTE",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value = Blockly.JavaScript.valueToCode(
    block,
    "VALUE",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = element + ".setAttribute(" + attribute + ", " + value + ");\n";
  return code;
};
//get attribute
Blockly.Blocks["get_attribute"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("get attribute");
    this.appendValueInput("ATTRIBUTE")
      .setCheck("String")
      .appendField("from element");
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip("Get the value of an attribute from an HTML element");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["get_attribute"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var attribute = Blockly.JavaScript.valueToCode(
    block,
    "ATTRIBUTE",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = element + ".getAttribute(" + attribute + ")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//remove attribute
Blockly.Blocks["remove_attribute"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("remove attribute");
    this.appendValueInput("ATTRIBUTE")
      .setCheck("String")
      .appendField("from element");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Remove an attribute from an HTML element");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["remove_attribute"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var attribute = Blockly.JavaScript.valueToCode(
    block,
    "ATTRIBUTE",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = element + ".removeAttribute(" + attribute + ");\n";
  return code;
};

//create element
Blockly.Blocks["create_element"] = {
  init: function () {
    this.appendValueInput("TAG")
      .setCheck("String")
      .appendField("create element with tag");
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip("Create a new HTML element");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["create_element"] = function (block) {
  var tag = Blockly.JavaScript.valueToCode(
    block,
    "TAG",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = "document.createElement(" + tag + ")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//set timeout
Blockly.Blocks["set_timeout"] = {
  init: function () {
    this.appendValueInput("SECONDS").setCheck("Number").appendField("wait");
    this.appendDummyInput().appendField("seconds");
    this.appendStatementInput("DO").appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Introduce a delay in program execution");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["set_timeout"] = function (block) {
  var seconds = Blockly.JavaScript.valueToCode(
    block,
    "SECONDS",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statementsDo = Blockly.JavaScript.statementToCode(block, "DO");

  var code =
    "setTimeout(function() {\n" +
    statementsDo +
    "}, " +
    seconds +
    " * 1000);\n";
  return code;
};
//get element by id
Blockly.Blocks["get_element_by_id"] = {
  init: function () {
    this.appendValueInput("ID")
      .setCheck("String")
      .appendField("get element by ID");
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip("Retrieve an HTML element by its ID");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["get_element_by_id"] = function (block) {
  var id = Blockly.JavaScript.valueToCode(
    block,
    "ID",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = "document.getElementById(" + id + ")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//get element by class
Blockly.Blocks["get_element_by_class"] = {
  init: function () {
    this.appendValueInput("CLASS")
      .setCheck("String")
      .appendField("get element by class");
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip("Retrieve HTML element(s) by class");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["get_element_by_class"] = function (block) {
  var cssClass = Blockly.JavaScript.valueToCode(
    block,
    "CLASS",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = "document.getElementsByClassName(" + cssClass + ")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//get element by tag
Blockly.Blocks["get_element_by_tag_name"] = {
  init: function () {
    this.appendValueInput("TAG_NAME")
      .setCheck("String")
      .appendField("get element(s) by tag name");
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip("Retrieve DOM element(s) by tag name");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["get_element_by_tag_name"] = function (block) {
  var tagName = Blockly.JavaScript.valueToCode(
    block,
    "TAG_NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = "document.getElementsByTagName(" + tagName + ")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//add event listener
Blockly.Blocks["add_event_listener"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("add event listener to element");
    this.appendValueInput("EVENT").setCheck("String").appendField("on event");
    this.appendStatementInput("DO").appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Add an event listener to an HTML element");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["add_event_listener"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var event = Blockly.JavaScript.valueToCode(
    block,
    "EVENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var statementsDo = Blockly.JavaScript.statementToCode(block, "DO");
  var code =
    element +
    ".addEventListener(" +
    event +
    ", function(event) {\n" +
    statementsDo +
    "});\n";
  return code;
};
//remove event listener
Blockly.Blocks["remove_event_listener"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("remove event listener from element");
    this.appendValueInput("EVENT").setCheck("String").appendField("on event");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Remove an event listener from an HTML element");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["remove_event_listener"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var event = Blockly.JavaScript.valueToCode(
    block,
    "EVENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code =
    element + ".removeEventListener(" + event + ", function(event) {});\n";
  return code;
};

//modify css value
Blockly.Blocks["change_css_value"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("change CSS value of element");
    this.appendValueInput("PROPERTY")
      .setCheck("String")
      .appendField("set property");
    this.appendValueInput("VALUE").setCheck("String").appendField("to value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Change CSS values for an HTML element");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["change_css_value"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var property = Blockly.JavaScript.valueToCode(
    block,
    "PROPERTY",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value = Blockly.JavaScript.valueToCode(
    block,
    "VALUE",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = element + ".style[" + property + "] = " + value + ";\n";
  return code;
};
//get css value
Blockly.Blocks["get_css_value"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("get CSS value of element");
    this.appendValueInput("PROPERTY")
      .setCheck("String")
      .appendField("property");
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip("Get CSS values for an HTML element");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["get_css_value"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var property = Blockly.JavaScript.valueToCode(
    block,
    "PROPERTY",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = element + ".style[" + property + "]";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//add element to DOM
Blockly.Blocks["add_element_to_dom"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("add element to DOM");
    this.appendValueInput("PARENT")
      .setCheck("String")
      .appendField("as child of");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Add an element to the DOM (Document Object Model)");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["add_element_to_dom"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var parent = Blockly.JavaScript.valueToCode(
    block,
    "PARENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = parent + ".appendChild(" + element + ");\n";
  return code;
};

//remove element from DOM
Blockly.Blocks["remove_element"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("remove element");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Remove an HTML element from the DOM");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["remove_element"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = "var elem = " + element + ";\n";
  code += "if (elem.parentNode) {\n";
  code += "  elem.parentNode.removeChild(elem);\n";
  code += "}\n";
  return code;
};
//append text
Blockly.Blocks["append_text"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("append text");
    this.appendValueInput("TEXT").setCheck("String").appendField("to element");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Append text content to an HTML element");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["append_text"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var text = Blockly.JavaScript.valueToCode(
    block,
    "TEXT",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = element + ".textContent += " + text + ";\n";
  return code;
};
//set html
Blockly.Blocks["set_html_content"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("set HTML content of element");
    this.appendValueInput("HTML").setCheck("String").appendField("to HTML");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Set the HTML content of an HTML element");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["set_html_content"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var html = Blockly.JavaScript.valueToCode(
    block,
    "HTML",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = element + ".innerHTML = " + html + ";\n";
  return code;
};
//clone element
Blockly.Blocks["clone_element"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("clone element");
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip("Clone an HTML element");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["clone_element"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = element + ".cloneNode(true)";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//scroll to element
Blockly.Blocks["scroll_to_element"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("scroll to element");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Scroll the page to a specific HTML element");
    this.setHelpUrl("");
  },
};
Blockly.JavaScript["scroll_to_element"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = "var elem = " + element + ";\n";
  code += "if (elem) {\n";
  code += "  elem.scrollIntoView({ behavior: 'smooth' });\n";
  code += "}\n";
  return code;
};
//CSS proppertys
Blockly.Blocks["css_property"] = {
  init: function () {
    this.appendValueInput("ELEMENT")
      .setCheck("String")
      .appendField("set CSS property");
    this.appendDummyInput()
      .appendField("to")
      .appendField(
        new Blockly.FieldDropdown([
          ["color", "color"],
          ["background-color", "background-color"],
          ["font-size", "font-size"],
          ["width", "width"],
          ["height", "height"],
          ["margin", "margin"],
          ["padding", "padding"],
          ["border", "border"],
          ["text-align", "text-align"],
          ["display", "display"],
          ["position", "position"],
          ["top", "top"],
          ["right", "right"],
          ["bottom", "bottom"],
          ["left", "left"],
          ["opacity", "opacity"],
          ["box-shadow", "box-shadow"],
          ["text-shadow", "text-shadow"],
          ["border-radius", "border-radius"],
          ["overflow", "overflow"],
          ["z-index", "z-index"],
          ["cursor", "cursor"],
          ["transition", "transition"],
          ["transform", "transform"],
          ["background-image", "background-image"],
          ["background-position", "background-position"],
          ["background-repeat", "background-repeat"],
          ["background-size", "background-size"],
          ["outline", "outline"],
          ["box-sizing", "box-sizing"],
        ]),
        "PROPERTY"
      );
    this.appendValueInput("VALUE").setCheck("String");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Set a CSS property for an HTML element");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["css_property"] = function (block) {
  var element = Blockly.JavaScript.valueToCode(
    block,
    "ELEMENT",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var property = block.getFieldValue("PROPERTY");
  var value = Blockly.JavaScript.valueToCode(
    block,
    "VALUE",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = element + ".style[" + property + "] = " + value + ";\n";
  return code;
};
//set interval
Blockly.Blocks["set_interval"] = {
  init: function () {
    this.appendValueInput("FUNCTION")
      .setCheck("String")
      .appendField("set interval");
    this.appendValueInput("DELAY")
      .setCheck("Number")
      .appendField("with delay (ms)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip("Create a repeating interval using setInterval");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["set_interval"] = function (block) {
  var func = Blockly.JavaScript.valueToCode(
    block,
    "FUNCTION",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var delay = Blockly.JavaScript.valueToCode(
    block,
    "DELAY",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = "setInterval(function() {\n";
  code += func + ";\n";
  code += "}, " + delay + ");\n";
  return code;
};
//clear interval
Blockly.Blocks["clear_interval"] = {
  init: function () {
    this.appendValueInput("INTERVAL")
      .setCheck("String")
      .appendField("clear interval");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip("Clear a repeating interval created with setInterval");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["clear_interval"] = function (block) {
  var interval = Blockly.JavaScript.valueToCode(
    block,
    "INTERVAL",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  var code = "clearInterval(" + interval + ");\n";
  return code;
};
