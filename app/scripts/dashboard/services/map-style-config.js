'use strict';

angular.module('Dashboard').constant('MAP_STYLE_CONGIF', {
    'CONFIG':[
        {
            'featureType': 'administrative.land_parcel',
            'elementType': 'labels',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'landscape.man_made',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#eeeeee'
                }
            ]
        },
        {
            'featureType': 'landscape.natural',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#eeeeee'
                }
            ]
        },
        {
            'featureType': 'poi',
            'elementType': 'labels.text',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'poi.attraction',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#c6ebd7'
                }
            ]
        },
        {
            'featureType': 'poi.business',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'poi.business',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#c6ebd7'
                }
            ]
        },
        {
            'featureType': 'poi.business',
            'elementType': 'geometry.stroke',
            'stylers': [
                {
                    'color': '#c9e7dd'
                }
            ]
        },
        {
            'featureType': 'poi.government',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#c6ebd7'
                }
            ]
        },
        {
            'featureType': 'poi.government',
            'elementType': 'geometry.stroke',
            'stylers': [
                {
                    'color': '#c9e7dd'
                }
            ]
        },
        {
            'featureType': 'poi.medical',
            'elementType': 'geometry',
            'stylers': [
                {
                    'color': '#d9f2e4'
                }
            ]
        },
        {
            'featureType': 'poi.medical',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#c6ebd7'
                }
            ]
        },
        {
            'featureType': 'poi.park',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#c6ebd7'
                }
            ]
        },
        {
            'featureType': 'poi.park',
            'elementType': 'labels.text',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'poi.place_of_worship',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#c6ebd7'
                }
            ]
        },
        {
            'featureType': 'poi.place_of_worship',
            'elementType': 'geometry.stroke',
            'stylers': [
                {
                    'color': '#c9e7dd'
                }
            ]
        },
        {
            'featureType': 'poi.school',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#c6ebd7'
                }
            ]
        },
        {
            'featureType': 'poi.school',
            'elementType': 'geometry.stroke',
            'stylers': [
                {
                    'color': '#c9e7dd'
                }
            ]
        },
        {
            'featureType': 'poi.sports_complex',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#c6ebd7'
                }
            ]
        },
        {
            'featureType': 'road',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#ffffff'
                }
            ]
        },
        {
            'featureType': 'road',
            'elementType': 'geometry.stroke',
            'stylers': [
                {
                    'color': '#e3e2e8'
                }
            ]
        },
        {
            'featureType': 'road',
            'elementType': 'labels.text.fill',
            'stylers': [
                {
                    'color': '#999999'
                }
            ]
        },
        {
            'featureType': 'road',
            'elementType': 'labels.text.stroke',
            'stylers': [
                {
                    'color': '#f5f5f5'
                }
            ]
        },
        {
            'featureType': 'road.local',
            'elementType': 'labels',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'water',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#dbeded'
                }
            ]
        }
    ]
});
