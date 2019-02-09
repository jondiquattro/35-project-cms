import superagent from "superagent";




export const setModel = (model) => dispatch => {
  // console.log('model log',model)
  dispatch(runSetModel({ model: model }))
}

const runSetModel = payload => {
  return {
    type: "MODEL",
    payload: payload
  };
};

export const getSchema = (model, url) => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetSchema({ model: model, schema: data.body }));
  });
};


const runGetSchema = payload => {
  return {
    type: "SCHEMA",
    payload: payload
  };
};

export const getModels = url => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetModels(data.body));
  });
};

const runGetModels = payload => {
  console.log('rungetmodels', payload);
  return {
    type: "MODELS",
    payload: payload
  };
};

export const getRecords = url =>dispatch => {
  // console.log(url);
  superagent.get(url).then(data => {
      dispatch(runGetRecords(data.body.results));
      
  });
};

const runGetRecords = payload => {
  console.log(payload)
  return {
    type: "RECORDS",
    payload: payload
  };
};

export const getRecord = url => dispatch => {
  // console.log('called from getRecord')
  // console.log('getrecord',url)

  superagent.get(url).then(data => {

    dispatch(runGetRecord(data.body.results));
  });
};

const runGetRecord = payload => {
  console.log(payload);
  return {
    type: "RECORD",
    payload: payload
  };
};

export const post = (model, url, record) => dispatch => {
  superagent
    .post(url)
    .send(record)
    .then(data => {
      dispatch(runPost({ model, record: data.body }));
    });
};

const runPost = payload => {
  return {
    type: "POST",
    payload: payload
  };
};

export const put = (model, url, record) => dispatch => {
  superagent
    .put(url)
    .send(record)
    .then(data => {
      dispatch(runPut({ model, record: data.body }));
    });
};

const runPut = payload => {
  return {
    type: "PUT",
    payload: payload
  };
};

export const destroy = (model, id, url) => dispatch => {
  superagent.delete(url).then(data => {
    dispatch(runDestroy({ model, id }));
  });
};

const runDestroy = payload => {
  return {
    type: "DELETE",
    payload: payload
  };
};

export const clearRecord = () => {
  return {
    type: "CLEAR"
  };
};
