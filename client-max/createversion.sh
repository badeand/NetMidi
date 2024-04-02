export CURRENT_BRANCH=$(git branch --show-current)
export CURRENT_HASH=$(git log -n 1 --pretty=format:%h -- client-max.maxproj)
export CURRENT_DATETIME=$(date "+%Y%m%d_%H%M")

echo "{\"branch\":\"${CURRENT_BRANCH}\",\"CURRENT_HASH\":\"${CURRENT_HASH}\",\"CURRENT_DATETIME\":\"${CURRENT_DATETIME}\"}" > version_uf.json

jq "." version_uf.json > version.json

cat version.json

rm version_uf.json