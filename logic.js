// Blockly optimized for use in android webview by Protonos
// Small modifications can break the whole app so be careful!

var workspace = Blockly.inject("blocklyDiv", {
  toolbox: document.getElementById("toolbox"),
  renderer: "Geras",
  //theme: Blockly.Themes.Dark,
  sounds: false,
  scrollbars: true,
  controlls: false,
  //toolbox: false,  DO NOT USE true here!!!
  trashcan: true,
  media: "./blockly",
  readOnly: false,
  comments: false,
  horizontalLayout: false,
  grid: {
    spacing: 20,
    length: 3,
    colour: "#ccc",
    snap: true,
  },
  zoom: {
    controls: false,
    wheel: false,
    startScale: 1.0,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
    pinch: true,
  },
});

CustomDialog = {};
CustomDialog.hide = function () {
  dialogDiv = document.getElementById("customDialog");
  dialogDiv.close();
};

Blockly.dialog.setPrompt(function (message, defaultValue, callback) {
  CustomDialog.show("Prompt", message, {
    showInput: true,
    showOkay: true,
    onOkay: function () {
      callback(CustomDialog.inputField.value);
    },
    showCancel: true,
    onCancel: function () {
      callback(null);
    },
  });
  CustomDialog.inputField.value = defaultValue;
});
Blockly.dialog.setAlert(function (message, callback) {
  CustomDialog.show("Alert", message, {
    showCancel: true,
    onCancel: callback,
  });
});
Blockly.dialog.setConfirm(function (message, callback) {
  CustomDialog.show("Confirm", message, {
    showOkay: true,
    onOkay: function () {
      callback(true);
    },
    showCancel: true,
    onCancel: function () {
      callback(false);
    },
  });
});

CustomDialog.show = function (title, message, options) {
  var dialogDiv = CustomDialog.dialogDiv_;
  if (!dialogDiv) {
    dialogDiv = document.getElementById("customDialog");

    dialogDiv.onclick = function (event) {
      event.stopPropagation();
    };
    CustomDialog.dialogDiv_ = dialogDiv;
  }
  dialogDiv.showModal();

  dialogDiv.innerHTML =
    '<p class="customDialogMessage"></p>' +
    (options.showInput ? '<div><input id="customDialogInput"></div>' : "") +
    '<div class="customDialogButtons">' +
    (options.showCancel
      ? '<button id="customDialogCancel">Cancel</button>'
      : "") +
    (options.showOkay ? '<button id="customDialogOkay">OK</button>' : "") +
    "</div>";
  dialogDiv
    .getElementsByClassName("customDialogMessage")[0]
    .appendChild(document.createTextNode(message));

  var onOkay = function (event) {
    CustomDialog.hide();
    options.onOkay && options.onOkay();
    event && event.stopPropagation();
  };
  var onCancel = function (event) {
    CustomDialog.hide();
    options.onCancel && options.onCancel();
    event && event.stopPropagation();
  };

  var dialogInput = document.getElementById("customDialogInput");
  CustomDialog.inputField = dialogInput;
  if (dialogInput) {
    dialogInput.focus();

    dialogInput.onkeyup = function (event) {
      if (event.key === "Enter") {
        // Process as OK when user hits enter.
        onOkay();
        return false;
      } else if (event.key === "Escape") {
        // Process as cancel when user hits esc.
        onCancel();
        return false;
      }
    };
  } else {
    var okay = document.getElementById("customDialogOkay");
    okay && okay.focus();
  }

  if (options.showOkay) {
    document
      .getElementById("customDialogOkay")
      .addEventListener("click", onOkay);
  }
  if (options.showCancel) {
    document
      .getElementById("customDialogCancel")
      .addEventListener("click", onCancel);
  }
};

function getCode() {
  try {
    javascript.javascriptGenerator.INFINITE_LOOP_TRAP = null;
    var code = javascript.javascriptGenerator.workspaceToCode(workspace);
    return String(code);
  } catch (e) {
    return e;
  }
}

function runCode() {
  window.LoopTrap = 1000;
  javascript.javascriptGenerator.INFINITE_LOOP_TRAP =
    'if (--window.LoopTrap < 0) throw "Infinite loop.";\n';
  var code = javascript.javascriptGenerator.workspaceToCode(workspace);
  javascript.javascriptGenerator.INFINITE_LOOP_TRAP = null;
  try {
    eval(code);
  } catch (e) {
    alert(e);
  }
}

function getBlocks() {
  try {
    var blocks = Blockly.serialization.workspaces.save(workspace);
    return blocks;
  } catch (e) {
    return e;
  }
}

function loadBlocks(json) {
  try {
    Blockly.serialization.workspaces.load(JSON.parse(json), workspace);
    return null;
  } catch (e) {
    return e;
  }
}

function reloadWorkspace() {
  window.location.reload();
}

function setTheme(theme) {
  workspace.setTheme(theme);
}

function undoAction(action) {
  workspace.undo(action);
}
