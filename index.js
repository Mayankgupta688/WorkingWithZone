function createNewContext() {
  console.dir(zone)
}

var myZoneSpecifiation = {
  beforeTask: function () {
    // Executed every time when execution is going to be performed in current Zone
  }, afterTask: function () {
    // Executed every time when execution is done executing in current Zone
  }, onZoneCreated: function() {
    // This Function is executed when the Zone is created
  }, onError: function() {
    // Function is invoked when error is encountered in Current Executing Zone
  }
};

var myZone = zone.fork(myZoneSpecifiation);
myZone.run(main);