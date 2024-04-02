export CURRENT_BRANCH=$(git branch --show-current)
export CURRENT_HASH=$(git log -n 1 --pretty=format:%h -- client-max.maxproj)
export CURRENT_DATETIME=$(date "+%Y%m%d_%H%M")

echo "------VERSION INFO------"
echo "{" > version_uf.json
echo "\"branch\":\"${CURRENT_BRANCH}\"," >> version_uf.json
echo "\"hash\":\"${CURRENT_HASH}\"," >> version_uf.json
echo "\"time\":\"${CURRENT_DATETIME}\"," >> version_uf.json
echo "\"name\":\"${CURRENT_BRANCH}_${CURRENT_HASH}_${CURRENT_DATETIME}\"," >> version_uf.json
echo "\"win_url\":\"win_url\"," >> version_uf.json
echo "\"mac_url\":\"mac_url\"" >> version_uf.json
echo "}" >> version_uf.json

jq "." version_uf.json > version.json
rm version_uf.json
cat version.json


