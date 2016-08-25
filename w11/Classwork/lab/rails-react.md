# All Day Lab

Agenda:
For the morning you will be re-building one of Liza's Rails demos from scratch,
using her code as a reference and then ajaxing to the API with React. In the
afternoon you'll complete the Redux videos and create a React / Redux front-end.


# part 1

### morning

please choose one app to rebuild: https://github.com/ga-students/wdi-nyc-robots/tree/master/w11/Classwork/rails-102

i highly starting out with unicorns but if you're really really feeling your
oats try library

instructions for cors/ajax:

add rack cors gem in gemfile

in the cors.rb file - uncomment & change `example.com` to `*`

start react app and change react port to 3001 (ruby defaults to 3000 )

### afternoon

please finish this video series, this the video that shows how to hook-up
your react app to redux:
https://www.youtube.com/watch?v=nrg7zhgJd4w

here's the accompanying github:
https://github.com/learncodeacademy/react-js-tutorials/tree/master/5-redux-react

***one caveat***

in the video the instructor mentions decorators. we can't use them, so here's
an example with out decorators that uses a function to map state to props.

https://gist.github.com/sssyed/ad7f54842f19ee0e24b402e22a62171e
