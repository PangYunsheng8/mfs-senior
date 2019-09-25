router.get('/region', function (req, res, next) {
  res.header({ 'Access-Control-Method': '*' });
  res.header({ 'Access-Control-Allow-Origin': '*' });

  var regionData = []
  for (var i in data) {
    var regionName = data[i].region.name;
    regionData.push(regionName)
  }

  res.json({
    regionData: regionData
  });
});

router.post('/state', function (req, res, next) {
  res.header({ 'Access-Control-Method': '*' });
  res.header({ 'Access-Control-Allow-Origin': '*' });

  var stateData = []
  regionName = req.body.regionName
  for (var i in data) {
    var eachRegion = data[i].region
    if (eachRegion.name == regionName) {
      for (var j in eachRegion.state) {
        stateData.push(eachRegion.state[j].name);
      }
      break;
    }
  }

  res.json({
    stateData: stateData
  });
});

router.post('/city', function (req, res, next) {
  res.header({ 'Access-Control-Method': '*' });
  res.header({ 'Access-Control-Allow-Origin': '*' });

  var cityData = [];
  regionName = req.body.regionName;
  stateName = req.body.stateName;
  for (var i in data) {
    var eachRegion = data[i].region;
    if (eachRegion.name == regionName) {
      for (var j in eachRegion.state) {
        var eachState = eachRegion.state[j];
        if (eachState.name == stateName) {
          for (var k in eachState.city) {
            cityData.push(eachState.city[k].name)
          }
        }
      }
    }
  }

  res.json({
    cityData: cityData
  });
});
