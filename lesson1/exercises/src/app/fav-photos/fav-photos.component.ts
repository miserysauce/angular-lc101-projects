import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://previews.dropbox.com/p/thumb/AB4XLRxD_HK8y5aFyHBMiy8pcP0RFN0bsCl7_409Gavnd-bAGTCu7PE5q5bpxEm3O8TJLpdU0P0ZerGSaqpHvyF4cnafcyjK7P2FEjx2WO8GB5Wh99X8XkbJt8M5UaKyRTzp7HhMVvLmUSjGc4TxUCwHoIOji3j7KKBv7ZZ8Ek37AZkrxu2ioIm526aeW8l_o0_ar7-MsmxZ9erJOLn7kOeutZ7FqyFd6NMUfOdL9LK0n4uBfxa-D_uoYw7-_j1lf0BbQmgjpyeKqd7S2tsa0t6nDE-cadJeZCZxccyuzXzeAecpaoJWBFvJIKnL2YR4uJ2kflOK9dZ5vLpFzl0J7oxAvux3U4FP0v_EtMuAANCv6GrVcKbXgzsUb_iRzNBTd_Q/p.png';
  image2 = 'https://previews.dropbox.com/p/thumb/AB4Con75Szrj-nFj663MqNN3SRlrJy8BbYQ35KCdXBl7I_H-h_m6hCw_XIAQv5ibt3bEzvg1g6s2jtCEAFY3AeEKBswS-7J6Pk_DZigXU9ZjDxtMrLSHwyBxxcxlm5LnrZ3hXsT4dlNkNnU5W9O2KmCU3rw8Rdx-k487QiiODLyZZmNC4cpd5dIGOhSXpWrg2LWjdY93_VWuiPFrjrq2Om4ZiEZaFKacrb94LnYTSO1tmjEYiDSAYvFLA2Az_lhYGuxTlDsegIRuurGsRY8yhSlLq9VFTxtTCAlF3opyiJJBBXEdFCaDt3O_YFbJgAuwqx9ZSejyPI_fFwZC4J28R5Lzm9sfA7fW0QuX36b7wMg9ZoyX4B4trG5AAK6IG7x0ZQQ/p.png';
  image3 = 'https://previews.dropbox.com/p/thumb/AB5bAl22coplwaTR7b26T6X2PD4E-HrkjigLYylvGU0CHWvBoIx9v1HWWDkS9P0DDmppUafW2o4Z2gX9xN4WWtSIWkhitICtgXp2yXXZvfzJoMhy-XH9r188OXM-C3Ae-HxRnabVZXbkARub0WEpvlyppP5dXyRj4f49Up1iGXv4852nS36r9aPGzN7xsOjeaFi2I71zJ_UurRQLOPtvnCMkg0mATzxeizE2NoTCgDaHWa5jtG9x8L4CNvcrZggoCfSF4ucIJ6pO4ozlkyvyEewKcjo8lFvu_RlTwkm7gThmAAuqbAU17RaoiyUAo6J_h8NywfAxTA0pjWnK6yTIOiGkgvnVn3u6HpcpemTr_DNq1GumsEZza-iDrigC_pc-vmM/p.png';

  constructor() { }

  ngOnInit() {
  }

}