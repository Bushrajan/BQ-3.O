//----------------------------------First Carte Deals  --------------------------------------------------------- 
const calculateCarteDeals = () => {

  const ZingerBurgerQty   = document.querySelector('input[name="ZingerBurgerQty"]').value;
  const KentuckyBurgerQty = document.querySelector('input[name="KentuckyBurgerQty"]').value;
  const MightyZingerQty   = document.querySelector('input[name="MightyZingerQty"]').value;
  const ZingertackerQty   = document.querySelector('input[name="ZingertackerQty"]').value;
 
 const ZingerBurger   = 550;
 const KentuckyBurger = 590;
 const MightyZinger   = 700;
 const Zingertacker   = 590;
 
 const OrderPrice1 = ZingerBurgerQty   *  ZingerBurger   +
                    KentuckyBurgerQty *  KentuckyBurger +  
                    MightyZingerQty   *  MightyZinger   +
                    ZingertackerQty   *  Zingertacker;
 
  document.querySelector("#total1").innerHTML = OrderPrice1;
 
}; 
document.querySelector("button").addEventListener("click", calculateCarteDeals);

//----------------------------------Second Signature Deals  --------------------------------------------------------- 
function calculateKFCSignatureDeals (){
  const CrispyBoxQty    = document.querySelector('input[name="CrispyBoxQty"]').value;
  const BonelessBoxQty  = document.querySelector('input[name="BonelessBoxQty"]').value;
  const WowBoxQty       = document.querySelector('input[name="WowBoxQty"]').value;
  const CrispyDouBoxQty = document.querySelector('input[name="CrispyDouBoxQty"]').value;
 
 const CrispyBox     = 650;
 const BonelessBox   = 670;
 const WowBox        = 950;
 const CrispyDuoBox  = 1250;
 
 const OrderPrice2 = CrispyBoxQty     *  CrispyBox     +
                     BonelessBoxQty   *  BonelessBox   +  
                     WowBoxQty        *  WowBox        +
                     CrispyDouBoxQty  *  CrispyDuoBox ;
                    
  document.querySelector("#total2").innerHTML = OrderPrice2;
 
 }; 
//  document.querySelector("button").addEventListener(calculateKFCSignatureDeals);
  