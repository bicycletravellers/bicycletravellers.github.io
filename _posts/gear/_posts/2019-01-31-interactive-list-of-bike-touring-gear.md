--- 
layout: post
title: Interactive List of Bike Touring Gear
use_brand: true
use_brand_short: false
description: Preparing a gear list for your next trip was hard until now. Choose all the gear you want and download a PDF or directly print the list.
h1_title: Interactive List of <br> Bike Touring Gear
short_text: This is a list of every gear one can imagine for bike touring. You can download a PDF of your selected gear or print it directly as a checklist.
date_pub: 2019-01-31 13:00:00 +0300
date: 2019-10-30 13:00:00 +0300
image: bike-touring-equipment # upload edilirken yazılan dosya ismi
# img_caption: If any
published: true
category: gear
has_pdf: false
--- 

<div class="page-break"></div>

<script>

document.addEventListener("DOMContentLoaded", function() {
var ele = document.querySelectorAll("input[type=checkbox]");
for(var i=0;i<ele.length;i++){
           ele[i].addEventListener( 'change', function() {
            if(this.checked) {
                this.parentElement.classList.remove('hide-on-print');
            } else {
                this.parentElement.classList.add('hide-on-print');
            }
        });
}

});

</script>

## Bike Accessories and Storage
### Accessories
{% assign list = "

Helmet
Head Light
Flashing Tail Light
Bicycle Lock
Cycling Computer
Helmet Mirror
Handlebar Mirror
Handlebar Extensions
Mudguards
Reflectors
Stem Riser or Adjustable Stem
Bicycle Rain Cover
Bicycle Transport Bag
Kickstand

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}

### Panniers and Bags

{% assign list = "

Front Panniers
Rear Panniers
Frame Bag
Handlebar Bag
Saddle Bag
Trunk Bag
Stem Bag
Top Tube Bag
Seat Post Bag

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}


### Racks and Other Storage

{% assign list = "

Front Rack
Rear Rack
Trailer
Straps
Bungee Cords
Bottle Cages
Collapsible Water Bag
Insulated Bottle

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}


## Camping Gear
### Sleep System

{% assign list = "

Tent
Tarp
Hammock
Bivy Bag
Ground Cloth
Quilt
Sleeping Bag
Sleeping Bag Liner
Sleeping Pad
Air Pillow

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}

### Survival Gear

{% assign list = "

Lighter
Compass
Whistle
Emergency Space (mylar) Blanket
Personal Locator Beacon
50' Nylon Cord
Bear Spray

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}

### Other Camping Gear

{% assign list = "

Water Filter
Water Purifier
Portable Camp Chair
Light Backpack
Headtorch
Flashlight
Camp Light
Mosquito Head Net
Insect Repellent
Nylon Stuff Sacks / Drybags

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}




## Kitchen and Cooking
### Stove & Fuel

{% assign list = "

Canister Gas Stove
Wood Stove
Petrol (Gasoline) Stove
Alcohol Stove
Esbit Stove
Fuel bottle
Canister Refiller

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}

### Cookware

{% assign list = "

Pot
Pan
Mug
Cutting Board
Plates
Fork
Spoon
Wooden Spoon
Knife
Cutlery Bag


" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}

### Other

{% assign list = "

Coffee Filter
Tea Brewer
Scourer
Dish Cloth
Dish Detergent

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}


##  Clothing

### Cycling Clothes

{% assign list = "

Cycling Jersey
Long-Sleeve Jersey
Cycling Shorts
Sports Bras
Cycling Gloves
Cycling Socks
Cycling Shoes
Cycling Long-Tights
Buff
Bandannas
Sweat Bands
Visibility Vest

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}

### Camp Clothes

{% assign list = "

Synthetic T-Shirt
Long-Sleeve T-Shirt
Synthetic Underwear
Pants
Convertible Pants
Swimming Shorts
Sun Hat
Sandals
Flip-Flops
Running Shoes
Casual Shoes

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}



### Rain Gear

{% assign list = "

Rain Jacket
Rain Pants
Waterproof Socks
Waterproof Shoes & Gaiters
Helmet Cover

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}



### Winter Gear

{% assign list = "

Thermal Shirts
Thermal Underwear
Insulated Windpants
Insulated Jacket
Fleece Jacket
Down Jacket
Balaclava
Arm + Leg Warmers
Warm Hat
Synthetic / Wool Socks
Gloves
Ear Warmers
Scarf

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}



## Electronics

{% assign list = "

Smartphone
Tablet
Laptop Computer
Camera
GPS Device
Mp3 Player
Headphones
Earphones
Spare Batteries
Chargers and Cables
USB Flash Drive
Memory Cards
International Power Plug adapter

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}



## Repair & Maintenance
### Bike Repair Tools

{% assign list = "

Multi-Tool
Allen Wrenches
Pedal Wrench
Spoke Wrench
Adjustable Wrench
Pump
Presta - Schrader Valve Adapter
Tire Pressure Gauge
Flat Repair Kit
Tire Boot
Chain Tool
Chain Lube
Degreaser
Hose Clamps
Cassette - Freewheel Removal Tool
External BB Tool
Blue Loctite
Screwdriver
Torx Keys

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}


### Bike Spare Parts

{% assign list = "

Spare Inner Tubes
Spare Tire (Folding)
Spare Spokes
QR Axle
QR Nut Generic
Carriage Bolt
Trailer QR Axle
Brake Pads
Brake Cables
Shift Cables
Replacement Cleats
Spare Chain Link
Rim Tape
Extra Nuts, Bolts, and Wire

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}

### Equipment Repair Items

{% assign list = "

Zip Ties
Duct Tape
Electrical Tape
String
Sewing Kit
Shoe Laces
Zipper Pulls
Seam Sealer
Fly Repair Tape
Tent Pole Repair Sleeve
Mattress Repair Kit
Pillow Repair Kit

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}


## Toiletries

{% assign list = "

Travel Towel
Washcloth
Soap
Shampoo
Laundry Detergent
Toothbrush
Toothpaste
Floss
Toilet Paper
Baby Wipes
Hand Sanitizer
Skin Cream
Chamois cream
Sunscreen
Cotton Swabs
Folding Bowl
Shower Bag
Nail Clippers
Tweezers
Hair Brush / Comb
Hair Ties
Disposible Razor
Shaving cream
Compact Mirror
Woman's Hygiene Products
Ear Plugs
Deodorant

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}


## First Aid

{% assign list = "

Prescription Medication
Multi-Vitamins
Band-Aids
Adhesive First-Aid Tape
Blister Bandages
Alcohol Wipes
Compress / Gause Pads
Ibroprophen / Aspirin
Anti-Chafing Balm
Anti-Itch Cream
Muscle Relief Cream
Foot Powder
Anti-Diahearreal Tabs
Antihistimine Tablets
Sports Injury Cloth Bandage
Neoprene Knee / Ankle Wrap
Lip Balm
Antacid Tablets
Scissors
Strapping Tape
Giardia Anti-Biotic
Foot Infection Anti-Biotic
Elastic Bandage
Pain Reliever/Fever Reducer
Antihistamine

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}


## Misc.
### Documents

{% assign list = "

National ID Card
Drivers License
Passport
Visa Documents
ATM Debit Cards
Credit Cards
Cash
Personal / Traveler's Checks
Travel Tickets
Photocopies of Documents
Emergency Contact Info
Health and Travel Insurance Card
Payphone Calling Card
Contacts List

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}


### Other

{% assign list = "

Wallet
Watch
Notebook + Pen
Money Belt
Sunglasses
Superglue
Eye Masks
Clothes Pins
Maps
Guidebook
Small Padlock
Binoculars
Mini Tripod

" | newline_to_br | strip_newlines | split: "<br />" %}
{% include check-list.html posts = list %}


<br><br>


[<svg version="1" xmlns="http://www.w3.org/2000/svg" width="50%" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
    <rect x="9" y="11" fill="#424242" width="30" height="3"/>
    <path fill="#616161" d="M4,25h40v-7c0-2.2-1.8-4-4-4H8c-2.2,0-4,1.8-4,4V25z"/>
    <path fill="#424242" d="M8,36h32c2.2,0,4-1.8,4-4v-8H4v8C4,34.2,5.8,36,8,36z"/>
    <circle fill="#00E676" cx="40" cy="18" r="1"/>
    <rect x="11" y="4" fill="#90CAF9" width="26" height="10"/>
    <path fill="#242424" d="M37.5,31h-27C9.7,31,9,30.3,9,29.5v0c0-0.8,0.7-1.5,1.5-1.5h27c0.8,0,1.5,0.7,1.5,1.5v0 C39,30.3,38.3,31,37.5,31z"/>
    <rect x="11" y="31" fill="#90CAF9" width="26" height="11"/>
    <rect x="11" y="29" fill="#42A5F5" width="26" height="2"/>
    <g fill="#1976D2">
        <rect x="16" y="33" width="17" height="2"/>
        <rect x="16" y="37" width="13" height="2"/>
    </g>
</svg>](#){:onclick="return window.print(); return false;"} 
{: .tc .hide-on-print}

**Done checking? Click on the printer icon above to print the checklist OR choose "Save as PDF" in the print dialog.
<br> <br> And share this awesome tool with your friends!**
{: .tc .hide-on-print}

