
import os
from PIL import Image

def ecriturePhoto(folderName, output,key):

	fileOut = open(output, 'w')
	print folderName
	for photo in os.listdir(folderName):
		print folderName+photo
		nameWithShit = photo.split(".")
		if photo[0]!="." and nameWithShit[1]!="thumbnail":
			img = Image.open(folderName+photo)
			fileOut.write("<figure id=\""+key+"\" class=\"photo\" style=\"display:none\" itemprop=\"associatedMedia\"itemscope itemtype=\"http://schema.org/ImageObject\">\n<a href=\"")
			fileOut.write(folderName+photo)
			fileOut.write("\" itemprop=\"contentUrl\" data-size=\"")
			fileOut.write(str(img.size[0]))
			fileOut.write("x")
			fileOut.write(str(img.size[1]))
			fileOut.write("\">\n <img src=\"")
			
			fileOut.write(folderName+nameWithShit[0]+".thumbnail")
			fileOut.write("\"itemprop=\"thumbnail\" alt=\"Image description\"  />\n</a>\n<figcaption></figcaption>\n</figure>\n\n")
			print img.size

	fileOut.close()

def GenerationImageThumbnail(folderName):

	MAXWIDTH = 250.0;
	for infile in os.listdir(folderName):
		outfile = os.path.splitext(infile)[0] + ".thumbnail"
		if infile != outfile:
			try:
				im = Image.open(folderName+infile)
				s = im.size
				ratio = MAXWIDTH/s[0];
				# print(ratio)
				im.thumbnail((int(round(s[0]*ratio)), int(round(s[1]*ratio))), Image.ANTIALIAS)
				im.save(folderName+outfile, "JPEG")
			except IOError:
				print "cannot create thumbnail for '%s'" % infile

folderName = "../images/GrandDefiVictor/"
GenerationImageThumbnail(folderName)
ecriturePhoto(folderName, "./Oka.txt", 'GrandVictor')






