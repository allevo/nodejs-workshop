#!/bin/bash

echo "curl http://localhost:3000/pippo?aa=4"
curl http://localhost:3000/pippo?aa=4
echo "";
echo "curl http://localhost:3000/pippo?aa=4 -XPOST -d 'wow'"
curl http://localhost:3000/pippo?aa=4 -XPOST -d 'wow'
echo "";
echo "curl http://localhost:3000/pippo?aa=4 -XPOST -d 'wow' -H 'no: aa'"
curl http://localhost:3000/pippo?aa=4 -XPOST -d 'wow' -H 'no: aa'
echo "";
echo "curl http://localhost:3000/pippo?aa=4 -XPOST -d 'wow' -H 'NO: aa'"
curl http://localhost:3000/pippo?aa=4 -XPOST -d 'wow' -H 'NO: aa'
echo "";
