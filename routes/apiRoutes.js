const router = require("express").Router();
const moment = require("moment");

const activities = [];
//add routes:
//todo: route for saving activity data
router.post("/activities", (req, res) => {
  //console.log(req.body);
  const { mileage, duration, date } = req.body;
  if (!mileage) {
    return res.status(400).json({
      success: false,
      message: "mileage is required",
    });
  }
  if (!duration) {
    return res.json({
      success: false,
      message: "duration is required",
    });
  }

  if (!date) {
    return res.json({
      success: false,
      message: "date is required",
    });
  }
  //console.log(mileage, duration, date)
  activities.push(req.body);
  res.json({
    activities: activities,
    success: true,
  });
});

// todo: route for getting activity data by duration
// TODO: route for getting activity data by mileage

router.get("/graphs/mileage", (req, res) => {
  //format data like so:
  /*i need an array con arrays
  [
    [
      timestamp, 
      data
    ]
  ]*/
  const formattedData = activities.map((activity) => {
    const timestamp = moment(activity.date).format("x");
    return [parseInt(timestamp), parseInt(activity.mileage)];
  });
  res.json(formattedData);
});

router.get("/graphs/duration", (req, res) => {
  //format data like so:
  /*i need an array con arrays
  [
    [
      timestamp, 
      data
    ]
  ]*/
  const formattedData = activities.map((activity) => {
    const timestamp = moment(activity.date).format("x");
    return [parseInt(timestamp), parseInt(activity.duration)];
  });
  res.json(formattedData);
});
// router.post

module.exports = router;
