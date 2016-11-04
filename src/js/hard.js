class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  tick () {
    if(this.qualityDecreasesWithTime()){
      if(this.quality>0){
        if (this.name != 'Sulfuras, Hand of Ragnaros'){
          if(this.name=='Conjured Mana Cake'){
            this.quality = this.quality-2;
               } else {
                  this.quality=this.quality-1;
                }
              }
            }  
    }else {
      if (this.quality < 50) {
           this.quality = this.quality + 1;
           this.checkingBackStagePasses();
        }
      }
  
 
        
    if (this.name != 'Sulfuras, Hand of Ragnaros') {
      this.sellIn = this.sellIn - 1;
    }
    if (this.sellIn < 0) {
      if (this.name != 'Aged Brie') {
        if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.quality > 0) {
            if (this.name != 'Sulfuras, Hand of Ragnaros') {
              this.quality = this.quality - 1;
               if(this.name=='Conjured Mana Cake'){
                this.quality= this.quality-1;
              }
            }
          }
        } else {
          this.quality = this.quality - this.quality;
        }
      } else {
        if (this.quality < 50) {
          this.quality = this.quality + 1;
        
      }
    }
  }
}

  qualityDecreasesWithTime(){
    if(this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert'){
      return true;
    } else {
      return false;
    }
  }

  workingBackStagePasses(){
    if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
      if (this.sellIn < 11) {
        if (this.quality < 50) {
          this.quality = this.quality + 1;
          }
        }
          if (this.sellIn < 6) {
            if (this.quality < 50) {
              this.quality = this.quality + 1;
            }
          }
        }
      }


}


export { GildedRose };
