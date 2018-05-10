import { CREATE_ASSET, UPDATE_ASSET } from '../actions'

const newAsset = (assetId, assetType) => {
  return {
    id: assetId,
    assetName: assetType === 'Stock' ? ['AAPL','GOOGL','FB', 'TSLA', 'MSFT'][Math.floor(Math.random() * 4)] : ['EUR','USD','GBP', 'NIS', 'AUD'][Math.floor(Math.random() * 4)],
    price: Math.random()*10,
    lastUpdate: Date.now(),
    assetType: assetType
  }
}

const assetsMiddleWare = store => next => action => {
  console.log("Middleware triggered:", action);
  switch(action.type) {
    // case CREATE_ASSET:
    //   for (let i = 0; i < 10; i++) {
    //     dispatch(createAsset(newAsset(i, 'Stock')))
    //     dispatch(createAsset(newAsset(i+10, 'Currency')))
    //   }
    case 'TEST':
      store.dispatch('TEST_REDUCER')
  }
  next(action);
}

export default assetsMiddleWare