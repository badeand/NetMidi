export WIN_URL=$(jq -r '.win_url' ../client-max/version.json)
echo "Win URL:    ${WIN_URL}"
export MAC_URL=$(jq -r '.mac_url' ../client-max/version.json)
echo "Mac URL:    ${MAC_URL}"


cp ./templates/DOWNLOAD-template.md DOWNLOAD.md
sed -i '' "s|mac_url|${MAC_URL}|g" DOWNLOAD.md
sed -i '' "s|win_url|${WIN_URL}|g" DOWNLOAD.md


rm -rf markdown

rm -rf binary
mkdir binary

rm -rf temp
mkdir temp
cd temp

mkdir collected
mkdir target
cd target
mkdir resources
cd ..
cd ..
cp -r /Users/badeand/SynologyDrive/Documents/notater-privat/Fag/Maker/Prosjekter/NetMidi/Documentation/* ./temp/collected
rm ./temp/collected/resources/*.md
rm ./temp/collected/resources/*.svg

cp temp/collected/resources/* temp/target/resources/

node index.js

cp ./resources/reference.docx temp/target

cd temp/target

pandoc -s "NetMidi_System_Documentation.md"  -o "NetMidi_System_Documentation.docx" \
 --reference-doc=reference.docx 

 rm reference.docx
 
/Applications/LibreOffice.app/Contents/MacOS/soffice --headless --convert-to pdf "NetMidi_System_Documentation.docx" --outdir .

cd ../..

cp ./temp/target/*.pdf ./binary/
rm ./temp/target/*.pdf
cp ./temp/target/*.docx ./binary/
rm ./temp/target/*.docx


cp -r ./temp/target .
mv target markdown

cat README-epilogue.md >> markdown/README.md

echo "\n\n\n## Download client binaries\n\n">> markdown/README.md
cat DOWNLOAD.md >> markdown/README.md

rm -rf temp

mv ./markdown/README.md ..


