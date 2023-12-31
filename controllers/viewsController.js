const Tour = require('./../models/tourModels');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getOverview = catchAsync(async (req, res, next) => {
  //1 get tour data from collection
  const tours = await Tour.find();

  //2 Build Template
  //3Render that template using tour data from 1
  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});

exports.getTour = async (req, res, next) => {
  //1 Get the data for the requested tour(including reviews and guides)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  if (!tour) {
    return next(new AppError('There is no tour with that name', 404));
  }

  //2 Build the template
  //3 Render template using from 1
  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour,
  });
};

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log Into Your Account',
  });
};
