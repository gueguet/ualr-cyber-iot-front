const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const db = admin.database();

/**
 * Receive data from pubsub, then
 * Write telemetry raw data to bigquery
 * Maintain last data on firebase realtime database
 */

 var data = {
   xacc_data: 0,
   yacc_data: 0,
   zacc_data: 0,
   humidity: 0,
   pressure: 0,
   temperature: 0
 };

 
exports.receiveTelemetry = functions.pubsub
  .topic('telemetry-topic')
  .onPublish((message, context) => {
    const attributes = message.attributes;
    const payload = message.json;


    db.ref(`/telemetry_data`).set


    console.log("PAYLOAD : ");
    console.log(payload);

    console.log("XACC : ");
    console.log(payload.xacc);

    if (payload.xacc !== undefined) {
      data.xacc_data = payload.xacc;
    }

    if (payload.yacc !== undefined) {
      data.yacc_data = payload.yacc;
    }

    if (payload.zacc !== undefined) {
      data.zacc_data = payload.zacc;
    }

    if (payload.humidity !== undefined) {
      data.humidity = payload.humidity;
    }

    if (payload.temperature !== undefined) {
      data.temperature = payload.temperature;
    }

    if (payload.pressure !== undefined) {
      data.pressure = payload.pressure;
    }

    const deviceId = attributes['deviceId'];

    return Promise.all([
      updateCurrentDataFirebase(data)
    ]);

  });

/**
 * Maintain last status in firebase
*/
function updateCurrentDataFirebase(data) {

  return db.ref(`/telemetry_data`).set({
    xacc: data.xacc_data,
    yacc: data.yacc_data,
    zacc: data.zacc_data,
    humidity: data.humidity,
    pressure: data.pressure,
    temperature: data.temperature,
  });

}
