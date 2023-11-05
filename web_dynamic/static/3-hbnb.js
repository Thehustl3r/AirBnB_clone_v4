// Execute the script only when DOM is loaded
$(document).ready(function() {

    // Create a dictionary to store the checked Amenity IDs
    var checkedAmenities = {};

    // Listen for changes on each input checkbox tag
    $("input[type='checkbox']").change(function() {

        // Get the Amenity ID and name from the DOM
        var amenityId = $(this).attr("data-id");
        var amenityName = $(this).attr("data-name");

        // If the checkbox is checked, add the Amenity ID to the dictionary
        if ($(this).is(":checked")) {
            checkedAmenities[amenityId] = amenityName;
        }

        // If the checkbox is unchecked, remove the Amenity ID from the dictionary
        else {
            delete checkedAmenities[amenityId];
        }

        // Update the h4 tag inside the div Amenities with the list of Amenities checked
        $("#divAmenities h4").text("Amenities: " + Object.values(checkedAmenities).join(", "));
    });
});
