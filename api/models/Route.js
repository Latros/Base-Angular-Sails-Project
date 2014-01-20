/**
 * Route
 *
 * @module      :: Model
 * @description :: The 'route' object, the core object of Crag Project. Contains info such as name, grade, FA, etc etc.
 * @docs    :: https://github.com/Latros/CragProject
 */

module.exports = {

  beforeValidation: function(values, cb){

    // We don't want empty values being put into the database as emptystring,
    // we want them put into the database as null... so before validation, if
    // any of the values are emptystring, set them to null instead
    _.each(values, function(index){
      if(this[index] == ''){
        this[index] = null;
      }
    });

    cb();

  },

  attributes: {

    /**
     * Associations Stuff
     **/
    // User ID of the person who submitted this route into the DB
    submitted_by: {
      type: 'INTEGER'
      // required: true
    },
    // ID of the wall that this route is on
    wall_id: {
      type: 'INTEGER'
      // required: true
    },

    /**
     * URL Stuff
     **/
    // SEO & Readability friendly URL access to view this route
    slug: function() {
      return this.name
      .toString()
      .trim()
      .replace('/[^A-Za-z0-9-]+/', '')
      .replace(new RegExp(' ', 'g'), '-')
      .toLowerCase();
    },

    /**
     * Rating Information
     **/
    // Quick function to do the upvote/downvote math for us
    rating: function() {
      if(this.upvotes - this.downvotes < 0) {
        return 0;
      } else {
        return this.upvotes - this.downvotes;
      }
    },
    // # of upvotes
    upvotes: {
      type: 'INTEGER',
      defaultsTo: 0
    },
    // # of downvotes
    downvotes: {
      type: 'INTEGER',
      defaultsTo: 0
    },

    /**
     * General Information
     **/
    // Name of the route (as named by FA)
    name: {
      type: 'STRING'
      // required: true
    },
    // Grade of the route
    grade: {
      type: 'STRING'
      // required: true
    },
    // Type of the route (Sport, Trad, Aid, Ice, Mixed)
    type: {
      type: 'STRING'
      // required: true
    },
    // Description as written by the FA
    description: {
      type: 'STRING'
      // required: true
    },
    // Directions to the route itself
    directions: {
      type: 'STRING',
      defaultsTo: undefined
    },
    // History of the route (if of any significance)
    history: {
      type: 'STRING',
      defaultsTo: undefined
    },

    /**
     * Advanced Information
     **/
    // How tall the route is in feet -- conversions done
    // client-side to other measurements
    height_in_feet: {
      type: 'INTEGER'
      // required: true
    },
    // Number of bolts on the route (if applicable)
    num_bolts: {
      type: 'INTEGER',
      defaultsTo: undefined
    },
    // Anchor type (tree, steel chain, just bolts, bolts with rap rings, etc)
    anchor: {
      type: 'STRING'
      // required: true
    },


    /**
     * First Ascent / First Free Ascent Information
     **/
    // Name of first ascentist
    fa: {
      type: 'STRING'
      // required: true
    },
    // Date of FA
    fa_date: {
      type: 'DATE'
      // required: true
    },
    // Name of first free ascentist
    ffa: {
      type: 'STRING',
      defaultsTo: undefined
    },
    // Date of FFA
    ffa_date: {
      type: 'DATE',
      defaultsTo: undefined
    }
  }

};
