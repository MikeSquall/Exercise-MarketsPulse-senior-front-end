export const CREATE_ASSET = 'CREATE_ASSET'
export const UPDATE_ASSET = 'UPDATE_ASSET'


export const createAsset = (id, assetName, price, lastUpdate, assetType) => ({
  type: CREATE_ASSET,
  id,
  assetName,
  price,
  lastUpdate,
  assetType
})

export const updateAsset = (price, lastUpdate) => ({
  type: UPDATE_ASSET,
  price,
  lastUpdate
})

export const testAction = (number) => ({
  type: 'TEST_REDUCER',
  number
})