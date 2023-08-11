import { Component } from '@angular/core';
import OrgChart from "@balkangraph/orgchart.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'relation-app';
  constructor() { }

        ngOnInit() {
            const tree = document.getElementById('tree');
            if (tree) {
                OrgChart.CLINK_CURVE = 0;
                var chart = new OrgChart(tree, {
                    nodeBinding: {
                    field_0: "name",
                    img_0: "img",
                    role_0:"Role/Designation",
                    type_0: "Type",
                    gender_0: "Gender",
                    age_0: "Age",
                    bodytype_0:"Body Type",
                    height_0: "Height",
                    weight_0: "Weight"
                    },
                    linkBinding:{
                        link_field_0: "relation"
                    },
                    clinks: [
                        {from: 1, to: 8, label: 'Father/Daughter In Law'}, 
                        {from: 2, to: 3, label: 'Son/Mother' },
                        {from: 2, to: 4, label: 'Son/Mother' },
                        {from: 2, to: 5, label: 'Queen/Deputy' },
                        //{from: 3, to: 5, label: 'Relatives' },
                        {from: 3, to: 7, label: 'Father/Son' },
                        {from: 3, to: 8, label: 'Husband/Wife' },
                        {from: 6, to: 8, label: 'Cousins' },
                    ]   
                });

                 chart.load([
                    { id: 1, name: "BIJJALA DEVA", img: "https://feeds.abplive.com/onecms/images/uploaded-images/2023/03/04/ea718881afbf28a9e8fd8a6776453dc01677934809096656_original.jpg", role: "King,Villian", type: "Human", gender: "Male", age:"60", bodytype:"Wel Built", height: "5.5 Feet", weight: "70 Kgs"},

                    { id: 2, name: "SIVAGAMI", pid: 1, tags: ['partner'], img: "https://qph.cf2.quoracdn.net/main-qimg-83e4164959631331d3614a71ac9bc21e-lq", role: "Queen", type: "Human", gender: "Female", age:"58", bodytype:"Wel Built", height: "5.4 Feet", weight: "65 Kgs"},

                    { id: 3, pid:1, name: "AMARENDRA BAHUBALI", img: "https://static.toiimg.com/thumb/msid-58365779,width-1280,resizemode-4/58365779.jpg", role: "Prince,Hero", type: "Human", gender: "Male", age:"40", bodytype:"Wel Built", height: "6 Feet", weight: "90 Kgs" },

                    { id: 4, pid:1, name: "BHALLALA DEVA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGzluQKAXWNb6nU7GL2Bg5vcikq9I757LHiUgt09kFw&s", role: "Prince,Villian", type: "Human", gender: "Male", age:"38", bodytype:"Wel Built", height: "6 Feet", weight: "100 Kgs" },

                    { id: 5, pid:2, name: "KATTAPPA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVlleW8jkqWmmGFvORmSASMpg7c4wmmbQ5uQEie-6&s", role: "Minister", type: "Human", gender: "Male", age:"65", bodytype:"Wel Built", height: "5.8 Feet", weight: "85 Kgs" },

                    { id: 6, pid:8, name: "KUMARA VERMA", tags: ["assistant"], img: "https://im.indiatimes.in/media/content/2018/May/a_picture_of_subbaraju_aka_baahubalis_kumar_varma_who_has_been_turned_into_an_emoticon_in_japan_1526811043_725x725.jpg", role: "Prince", type: "Human", gender: "Male", age:"55", bodytype:"Wel Built", height: "5.3 Feet", weight: "65 Kgs" },

                    { id: 7, pid: 3, name: "MAHENDRA BAHUBALI", img: "https://audioboom.com/i/30587412/600x600/c", role: "Hero", type: "Human", gender: "Male", age:"35", bodytype:"Wel Built", height: "5.9 Feet", weight: "80 Kgs" },

                    { id: 8, pid: 3, name: "DEVASENA", tags: ['left-partner'], img: "https://i.pinimg.com/236x/45/2c/98/452c98ff6dab88b612dcdf7fab1e6f40.jpg", role: "Heroine", type: "Human", gender: "Male", age:"58", bodytype:"Wel Built", height: "5.7 Feet", weight: "60 Kgs" },
                ]);
            }
        }
        
}
