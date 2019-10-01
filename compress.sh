#!/bin/bash

if [ -z "$1" ]; then
    echo "$0 <directory>"
    exit 0
fi

echo "Cleaning existing compression in $1..."
files=($1/*-fs8.png)
if [ -e "${files[0]}" ]; then
    rm $1/*-fs8.png
fi

echo "Compressing $1..."
pngquant --quality 65-80 $1/*.png

echo "Overwriting original png in $1..."
for i in $1/*fs8.png;
    do mv $i ${i/-fs8/}
done
