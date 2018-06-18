Hey, you’re in luck. This week’s Weekly Problem asks you only to work on an aspect of your Project
One, which asks you to “Use at least three min-width media queries to enhance mobile-first styles
for larger screens”.

If you’re new to media queries and mobile-first responsive design, have a look at this article:
<https://www.sitepoint.com/introduction-mobile-first-media-queries/>

And of course and as always, as you work, please post to Basecamp with your questions and problems.

Once you’ve completed the basic mobile-first responsive design for your Project One, you need to do
two things for this week’s Weekly Problem:

1. Place a copy of your stylesheet into the `week-04/` directory in your Weekly Problems repository.
2. In this README file below, explain in a paragraph or two how you went about executing your basic
   responsive design, and what additional remaining help or guidance you need (which you should
   also post to Basecamp).

My approach for responsive design is to try and fit/present the content in the
smallest viewport width as possible. Although it's fairly uncommon to have a
device with such a small screen, I think it is important to cater to all
possible users.  My challenge for this project is to try and present the table
columns in a readable manner.  Originally, I have 4 total columns: Station,
Taken, Empty, and Total.  On the smallest viewport, all four columns could no
longer fit.  I decided to remove the total column as that is the least needed
column.  I doubt anyone would want to know the total amount of docks, but I just
hid the column just in case I needed it in the future.  Once I took case of the
smallest viewport, I expanded the viewport until I needed more width in the
station column.  I set the width of that column to be about 30% of the viewport
width.  This gave the station column some breathing room for easier reading.
Once I reached at a viewport size where a larger width for the station is no
longer desirable, I set a fixed em unit on the column to prevent it from
growing.  This would prevent the table width from changing as I felt the column
spacing is perfect.
