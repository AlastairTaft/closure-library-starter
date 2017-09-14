
function extractProvides(content){
  var regex = new RegExp("goog.provide\\(['\"`]([\\w.]*?)['\"`]\\)", "gi")
  var matches = []
  do {
    var match = regex.exec(content)
    if (!match) break
    matches.push(match[1])
  } while (true);
  return matches
}

module.exports = extractProvides