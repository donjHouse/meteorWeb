import "./mainLayout.html"

Template.mainLayout.helpers({
    exampleMapOptions: function() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(47.914562,106.801028),
                zoom: 16,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.SATELLITE
            };
        }
    }
});

Template.mainLayout.onCreated(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('exampleMap', function(map) {
        // Add a marker to the map once it's ready
        var marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance,
            title:"HOUSE CENTER - Донж Хаус"
        });
    });
});

if (Meteor.isClient) {
    Meteor.startup(function() {
        GoogleMaps.load();
    });
}

Template.mainLayout.onRendered(function() {
    $(".button-collapse").sideNav();
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
})
