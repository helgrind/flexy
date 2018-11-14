function power_convert(id, val) {
  if (val) {
    switch (id) {
      case "dbm_val":
        var dbm_val = val;
        var watt_val = dbm_to_w(val);
        var rtw_val = dbm_to_rtw(val);
        break;
      case "watt_val":
        var dbm_val = w_to_dbm(val);
        var watt_val = val;
        var rtw_val = Math.sqrt(val);
        break;
      case "rtw_val":
        var dbm_val = rtw_to_dbm(val);
        var watt_val = val**2;
        var rtw_val = val;
        break;
      default:
        break;
    }
  } else {
    var dbm_val = null;
    var watt_val = null;
    var rtw_val = null;
  }
  document.getElementById("dbm_val").value = dbm_val;
  document.getElementById("watt_val").value = watt_val;
  document.getElementById("rtw_val").value = rtw_val;
}

function dbm_to_rtw(val) {
  var result = Math.sqrt(dbm_to_w(val));
  return result;
}

function rtw_to_dbm(val) {
  var result = w_to_dbm(val**2);
  return result;
}

function dbm_to_w(val) {
  var result = Math.pow(10, (val-30)/10);
  return result;
}

function w_to_dbm(val) {
  var result = 10*Math.log10(val)+30;
  return result;
}
