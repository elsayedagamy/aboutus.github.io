let remove = $('.remove');
let one = $('.no-1');
let two = $('.no-2');
let three = $('.no-3');
let about = $('.about-us');
let vision = $('.vision');
let mission = $('.mission');

one.on('click', function() {
    about.removeClass('remove');
    vision.addClass('remove');
    mission.addClass('remove');
});

two.on('click', function() {
    about.addClass('remove');
    vision.removeClass('remove');
    mission.addClass('remove');
});

three.on('click', function() {
    about.addClass('remove');
    vision.addClass('remove');
    mission.removeClass('remove');
});
