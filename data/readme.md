#### To add a new marker to the map, copy the following code:
```json
    {
      "type": "Feature",
      "id": /*ID NUMBER*/,
      "geometry": {
        "type": "Point",
        "coordinates": [
          /*LONGITUDE COORDINATES (DECIMAL)*/,
          /*LATITUDE COORDINATES (DECIMAL)*/
        ]
      },
      "properties": {
        "name": "NAME OF LOCATION",
        "classification": "LANDCOVER TYPE",
        "audiolink": "AUDIO URL/PATH",
        "imgname": "NAME OF LANDSAT IMAGE"
      }
    }
```
#### Paste the code in front of the closed square bracket (`]`) at the end of the points.geojson file.
##### \*\* Remember to add a comma to the end of the previous feature section \*\*

<br>
### Items to replace in the code:
Comment/String in Code | Change to | Variable Type
------------ | ------------- | -------------
/\*ID NUMBER\*/ | = (ID number of previous feature + 1) | Natural Integer 
/\*LONGITUDE COORDINATES (DECIMAL)\*/ | The longitude of the marker | Decimal
/\*LATITUDE COORDINATES (DECIMAL)\*/ | The latitude of the marker | Decimal
"NAME OF LOCATION" |Example formats: <br><ul><li>`Country`</li><li>`Province, Country`</li><li>`City, Country`</li></ul> | String
"LANDCOVER TYPE"| One of: <br><ul><li>`Arctic`</li><li>`Forest`</li><li>`Grassland`</li><li>`Mountainous`</li><li>`Water`</li></ul> | String
"AUDIO URL/PATH" | The link or file path to the audio file <br>(Note: audio clips are currently 11 to 16 seconds) | String
"NAME OF LANDSAT IMAGE" | Just the name of the image file (include the file format; e.g. `bahamas.png`)<br>Current size of the landsat images are 1004px width x 1024px height | String
