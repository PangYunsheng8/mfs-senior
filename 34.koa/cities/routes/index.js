const router = require('koa-router')()
const data = require('../public/data.js')

// const fs = require("fs")

// let filePromise = path => {
//   return new Promise((resolve, reject) => {
//       fs.readFile(path, (err, data)=>{
//           if (err) 
//               reject(err)
//           else
//               resolve(data)
//       })
//   })
// }
// async function readMyFile() {
//   return await filePromise('./public/data.txt')
// }

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/region', async (ctx, next) => {
  ctx.set({ 'Access-Control-Method': '*' });
  ctx.set({ 'Access-Control-Allow-Origin': '*' });
 
  var regionData = []
  for (var i in data) {
    var regionName = data[i].region.name;
    regionData.push(regionName)
  }

  ctx.body = {
    regionData: regionData
  }
});

router.post('/state', async (ctx, next) => {
  ctx.set({ 'Access-Control-Method': '*' });
  ctx.set({ 'Access-Control-Allow-Origin': '*' });

  var stateData = []
  regionName = ctx.request.body.regionName
  for (var i in data) {
    var eachRegion = data[i].region
    if (eachRegion.name == regionName) {
      for (var j in eachRegion.state) {
        stateData.push(eachRegion.state[j].name);
      }
      break;
    }
  }
  ctx.body = ({
    stateData: stateData
  });
});

router.post('/city', async (ctx, next) => {
  ctx.set({ 'Access-Control-Method': '*' });
  ctx.set({ 'Access-Control-Allow-Origin': '*' });
 
  var cityData = [];
  regionName = ctx.request.body.regionName;
  stateName = ctx.request.body.stateName;
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

  ctx.body = ({
    cityData: cityData
  });
});

module.exports = router
