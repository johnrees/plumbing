import jsPlumb from 'jsPlumb'

jsPlumb.ready(() => {

  jsPlumb.getInstance({
    Connector: "Flowchart",
    Anchor: "Bottom",
    Endpoint: [ "Dot", { radius: 2 }],
    ConnectionOverlays: [
      [ "Arrow", { location: 0.5, width: 10, length: 7, foldbackPoint: 1, direction: 1 }]
    ]
  });

  jsPlumb.connect({source: "one", target: "two"});

  jsPlumb.on(window, "resize", jsPlumb.repaintEverything);

});
