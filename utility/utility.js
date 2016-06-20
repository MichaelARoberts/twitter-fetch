var splitOnce = function(string, sep) {

  // Split the string
  var a = string.split(sep)

  // First Array Index
  var fai = a[0]

  // String to hold bits in
  var ha = ""

  for(let i = 1; i < a.length; i++){
    ha += a[i]
  }

  var na = []
  na[0] = fai
  na[1] = ha

  return na

}

module.exports.splitOnce = splitOnce;
