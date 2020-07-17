const SHOP_DATA = {
  brass: {
    id: 1,
    title: 'brass',
    instruments: [
      {
        id: 1,
        name: 'trumpets',
        imgUrl: 'https://stomvi-usa.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-12.41.04-PM.png',
        items: [
          {
            id: 1,
            name: 'Bb',
            price: 810,
            imgUrl: 'https://lh3.googleusercontent.com/proxy/AHDrFs5qcYZTMDOhB26CPbm_DmU9thWfFeQqiqcc4fYTIFnu8cUv6_a3xUHdZLpyS8i7eM_k0rCOoS0emIwPGIYk69586HtLCQ7ecNn5PyB0ilnpX_PCsmwHTdsr'
          },
          {
            id: 2,
            name: 'C',
            price: 3000,
            imgUrl: 'https://cdn.shopify.com/s/files/1/0149/6436/products/Bach_C190_Stradivarius_Cleveland_Model_C_Trumpet_Silver_Plate_210000016363a_1024x1024.JPG?v=1560274313'
          },
          {
            id: 3,
            name: 'piccolo',
            price: 2400,
            imgUrl: 'https://www.kesslerandsons.com/wp-content/uploads/YTR-9835.jpg'
          }
        ]
      },
      {
        id: 2,
        name: 'tubas',
        imgUrl: 'https://c1.wallpaperflare.com/preview/753/732/877/tuba-brass-band-musical-instrument-brass-instrument.jpg',
        items: [
          {
            id: 4,
            name: 'euphonium',
            price: 1650,
            imgUrl: 'https://lh3.googleusercontent.com/proxy/AHDrFs5qcYZTMDOhB26CPbm_DmU9thWfFeQqiqcc4fYTIFnu8cUv6_a3xUHdZLpyS8i7eM_k0rCOoS0emIwPGIYk69586HtLCQ7ecNn5PyB0ilnpX_PCsmwHTdsr'
          },
          {
            id: 5,
            name: 'Baritone horn',
            price: 1650,
            imgUrl: 'https://cdn.shopify.com/s/files/1/0149/6436/products/Bach_C190_Stradivarius_Cleveland_Model_C_Trumpet_Silver_Plate_210000016363a_1024x1024.JPG?v=1560274313'
          },
          {
            id: 6,
            name: 'Subcontrabass',
            price: 3000,
            imgUrl: 'https://www.kesslerandsons.com/wp-content/uploads/YTR-9835.jpg'
          }
        ]       
      },
      {
        id: 3,
        name: 'trombones',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Tenor_slide_trombone_3D_model.jpg',
        items: [
          {
            id: 7,
            name: 'Cimbasso',
            price: 2000,
            imgUrl: 'https://static.musiciansfriend.com/thehub/binaries/content/gallery/mf/buying-guides/getzen-1062fd-eterna-bass-trombone-800x474.jpg'
          },
          {
            id: 8,
            name: 'Contrabass',
            price: 1600,
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51Fd6dlMxuL._AC_SX466_.jpg'
          },
          {
            id: 9,
            name: 'bass',
            price: 4450,
            imgUrl: 'https://www.jimlaabsmusicstore.com/wp-content/uploads/2019/05/Schiller-Studio-Elite-Double-Trigger-Bass-Trombone-Silver.jpg'
          }
        ]
      },
      {
        id: 4,
        name: 'french horns',
        imgUrl: 'https://www.themusicden.com/images/product/large/ae00-37834.jpg',
        items: [
          {
            id: 10,
            name: 'single horn',
            price: 2670,
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51QzNxsFg5L._AC_.jpg'
          },
          {
            id: 11,
            name: 'double horn',
            price: 2495,
            imgUrl: 'https://cdn.shoplightspeed.com/shops/619825/files/10908565/image.jpg'
          },
          {
            id: 12,
            name: 'triple horn',
            price: 14600,
            imgUrl: 'https://media.musiciansfriend.com/is/image/MMGS7/YHR-891-Custom-Series-Triple-French-Horn/463210000000000-00-1600x1600.jpg'
          }
        ]
      }
    ]
  },
  woodwind: {
    id: 2,
    title: 'woodwind',
    instruments: [
      {
        id: 5,
        name: 'flutes',
        imgUrl: 'https://wallpaperaccess.com/full/1262535.jpg',
        items: [
          {
            id: 13,
            name: 'piccolo',
            price: 350,
            imgUrl: 'https://images.musicstore.de/images/0960/jupiter-jp-303-es-piccolo-flute_1_BLA0002674-000.jpg'
          },
          {
            id: 14,
            name: 'concert',
            price: 475,
            imgUrl: 'https://www.thomann.de/pics/bdb/317477/7732787_800.jpg'
          },
          {
            id: 15,
            name: 'alto',
            price: 475,
            imgUrl: 'https://elcoda.com/images/super/jupiter-jaf-1000x-alto-flute-1.jpg'
          }
        ]
      },
      {
        id: 6,
        name: 'saxophones',
        imgUrl: 'https://asunow.asu.edu/sites/default/files/saxophone-1920.jpg',
        items: [
          {
            id: 16,
            name: 'soprano',
            price: 310,
            imgUrl: 'https://prestomusicalrepairs.com/wp-content/uploads/2019/06/Yamaha-YTS-82ZBII-Tenor-Saxophone.jpg'
          },
          {
            id: 17,
            name: 'alto',
            price: 280,
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61aVemunk%2BL._AC_SX425_.jpg'
          },
          {
            id: 18,
            name: 'tenor',
            price: 500,
            imgUrl: 'https://www.tapestrymusic.com/images/product/large/824.jpg'
          }
        ]
      },
      {
        id: 7,
        name: 'clarinets',
        imgUrl: 'https://c0.wallpaperflare.com/preview/919/778/351/clarinet-music-instrument-jazz.jpg',
        items: [
          {
            id: 19,
            name: 'Bb',
            price: 650,
            imgUrl: 'https://www.long-mcquade.com/files/61768/lg_581324124afda8d3f38b427d9b02c71a.jpg'
          },
          {
            id: 20,
            name: 'bass',
            price: 800,
            imgUrl: 'https://www.mmimports.com/wp-content/uploads/2018/11/Buffet-1180-Bass-Clarinet.png'
          },
          {
            id: 21,
            name: 'A',
            price: 800,
            imgUrl: 'https://ae01.alicdn.com/kf/HTB1XDxeeqmWBuNkHFJHq6yatVXaR/Performance-clarinet-A-tone-clarinet-single-reed-woodwind-instrument-clarinet-in-A-clarinet-case-for-beginner.jpg'
          }
        ]
      },
      {
        id: 8,
        name: 'oboes',
        imgUrl: 'https://www.yamaha.com/en/musical_instrument_guide/common/images/oboe/play_main.jpg',
        items: [
          {
            id: 22,
            name: 'baroque',
            price: 2200,
            imgUrl: 'https://thumbs.static-thomann.de/thumb//thumb580x/pics/cms/image/guide/en/oboes/0133_baroque_oboe.jpg'
          },
          {
            id: 23,
            name: 'classical',
            price: 3000,
            imgUrl: 'https://sc01.alicdn.com/kf/HTB1NVNpXyrpK1RjSZFhq6xSdXXao.jpg'
          },
          {
            id: 24,
            name: 'modern',
            price: 3000,
            imgUrl: 'https://images.squarespace-cdn.com/content/v1/56a907197086d7a8dd225c6b/1572066312127-BXV2SA5E428S8OEEIRU2/ke17ZwdGBToddI8pDm48kAIrivx1obuIHS4zksyJ7bIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcFZ0b4gElCwJPu3CwXUzaj7-y_OGtFeMFX3-gkZdqzuQowfWs2rtjb3D_UpJHlpuR/clarient-oboe-difference.jpg'
          }
        ]
      }
    ]
  },
  strings: {
    id: 3,
    title: 'strings',
    instruments: [
      {
        id: 9,
        name: 'violins',
        imgUrl: 'https://wallpaperaccess.com/full/1133498.jpg',
        items: [
          {
            id: 25,
            name: 'classical',
            price: 1200,
            imgUrl: 'http://stringsmagazine.com/wp-content/uploads/2006/03/ViolinVsFiddle.jpg'
          },
          {
            id: 26,
            name: 'electric',
            price: 2000,
            imgUrl: 'https://www.sharmusic.com/productimages/image.axd/i.ppv24t/a.3/w.2000/h.2000/plug+%27n+play+%230153+4-string+electric+violin+outfit_l3.jpg'
          },
          {
            id: 27,
            name: 'fiddle',
            price: 300,
            imgUrl: 'https://www.ottawavalley.travel/images/image.php?id=5541&size=600'
          }
        ]
      },
      {
        id: 10,
        name: 'guitars',
        imgUrl: 'https://c1.wallpaperflare.com/preview/109/758/440/guitar-play-guitar-musical-instrument-song-book.jpg',
        items: [
          {
            id: 28,
            name: 'acoustic',
            price: 1600,
            imgUrl: 'https://www.musik-produktiv.com/pic-010112401xl/gibson-hummingbird-studio.jpg'
          },
          {
            id: 29,
            name: 'classical',
            price: 1000,
            imgUrl: 'https://i2.wp.com/www.musiccollection.ca/wp-content/uploads/2018/02/washburn-C5-Classical-Guitar.jpg?fit=800%2C800&ssl=1'
          },
          {
            id: 30,
            name: 'electric',
            price: 1200,
            imgUrl: 'https://www.tomleemusic.ca/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/0/3/0310121506_gtr_frt_001_rr.jpg'
          }
        ]
      },
      {
        id: 11,
        name: 'cellos',
        imgUrl: 'https://images.unsplash.com/photo-1532956985363-fb868d867e67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        items: [
          {
            id: 31,
            name: 'beginner',
            price: 1000,
            imgUrl: 'https://cdn.shopify.com/s/files/1/0182/0563/products/crescvctop_de420383-777f-498c-8050-13a390fea0d0_800x.JPG?v=1560529831'
          },
          {
            id: 32,
            name: 'intermediate',
            price: 5000,
            imgUrl: 'https://viola.bz/wp-content/uploads/2013/02/Duport-Stradivarius-cello-1711.jpg'
          },
          {
            id: 33,
            name: 'performer',
            price: 15000,
            imgUrl: 'https://i.pinimg.com/originals/be/f9/1d/bef91d71b8e786f9f5946458e7580db7.jpg'
          }
        ]
      },
      {
        id: 12,
        name: 'harps',
        imgUrl: 'https://d1t3zg51rvnesz.cloudfront.net/p/images/cms2/77/sa-auntie_35_harp_product_lkp_1819.jpg',
        items: [
          {
            id: 34,
            name: 'pedal',
            price: 15000,
            imgUrl: 'https://cdn.shopify.com/s/files/1/2225/8403/products/BD-Vendome-Merisier-RVB_467x700.jpg?v=1581890465'
          },
          {
            id: 35,
            name: 'non-pedal',
            price: 12000,
            imgUrl: 'https://lh3.googleusercontent.com/proxy/mkT5xRN-DZZRRI59oYcV3D7frMxIHZDNN_PwkK_wVMimknFVIfxM_Qb5ORL6INcRVMiPnJSAwiMRk6ENTkiLveyBCN6FpySbG0nedx0ugTj0BaE2_qcawFZH7vURgWo_u53m0kK7fE5gy28H0Xi0K5V2NlCxpGel4gpjzzlUnu5ZbgMmOtCQpRUV'
          },
          {
            id: 36,
            name: 'electric',
            price: 5600,
            imgUrl: 'https://33ign831kxwj3j2bmo23zqyo-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/1LH-SILHOUETTE-600x750.jpg'
          }
        ]
      }
    ]
  },
  percussion: {
    id: 4,
    title: 'percussion',
    instruments: [
      {
        id: 13,
        name: 'drums',
        imgUrl: 'https://drumsetexpert.com/wp-content/uploads/2017/01/Best-Drum-Set-Reviews.jpg',
        items: [
          {
            id: 37,
            name: 'complete',
            price: 1700,
            imgUrl: 'https://c1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/RSJ465C-31-41283b96b7a8ca9796cfc969e7d64439.jpg'
          },
          {
            id: 38,
            name: 'jazz',
            price: 1200,
            imgUrl: 'https://i5.walmartimages.com/asr/ee7fec68-29b5-4da3-a930-ab572d080ace_1.6191e4572bceef0bce63f51dc60a97e1.jpeg'
          },
          {
            id: 39,
            name: 'electric',
            price: 3500,
            imgUrl: 'https://www.bhphotovideo.com/images/images2500x2500/kurzweil_kd1s_electronic_drum_set_1453811.jpg'
          }
        ]
      },
      {
        id: 14,
        name: 'bongos',
        imgUrl: 'https://i.ytimg.com/vi/LF7NC_tRMw8/maxresdefault.jpg',
        items: [
          {
            id: 40,
            name: 'quinto',
            price: 450,
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81XTTCM2TaL._AC_SL1500_.jpg'
          },
          {
            id: 41,
            name: 'congo',
            price: 500,
            imgUrl: 'https://cdn3.volusion.com/4n9y2.qupg5/v/vspfiles/photos/DP-410-11-2.jpg?v-cache=1401459243'
          },
          {
            id: 42,
            name: 'tumba',
            price: 625,
            imgUrl: 'https://cosmomusic.ca/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/D/I/DICGGONCA1225MS_1_2.jpg'
          }
        ]
      },
      {
        id: 15,
        name: 'timpani',
        imgUrl: 'https://www.culturespotmc.com/wp-content/uploads/sites/www.culturespotmc.com/images/2018/01/James-Wyman.jpg',
        items: [
          {
            id: 43,
            name: 'hand-tightened',
            price: 3100,
            imgUrl: 'https://staging.ludwig-drums.com/application/files/5714/6402/8542/stdfibertimpani.jpg'
          },
          {
            id: 44,
            name: 'handle-type',
            price: 3500,
            imgUrl: 'https://www.thomann.de/pics/bdb/409236/11896671_800.jpg'
          },
          {
            id: 45,
            name: 'pedal lock-type',
            price: 3750,
            imgUrl: 'https://lh3.googleusercontent.com/proxy/LrxvYyYT7mDJTI4PFYuY3FmHPshIRILIRRfF-HiYkrkJggixIn0Aa80pMPsKEMay-6vq0hW3qMMgHtniAMmjK_z5t9bhHJDkciH4mYgl-WjoFhBanjlmNVrF0qC7B3j-DHEk'
          }
        ]
      },
      {
        id: 16,
        name: 'xylophones',
        imgUrl: 'https://i.pinimg.com/originals/4e/c3/e0/4ec3e0803feddc91296bc85b70f376c5.jpg',
        items: [
          {
            id: 46,
            name: 'fixed bars',
            price: 230,
            imgUrl: 'https://www.long-mcquade.com/files/18781/lg_M51.jpg'
          },
          {
            id: 47,
            name: 'separate bars',
            price: 200,
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81C62Ro6y8L._AC_SL1500_.jpg'
          },
          {
            id: 48,
            name: 'lap',
            price: 100,
            imgUrl: 'https://i.pinimg.com/originals/36/46/c9/3646c9381fc00aa64bf1925d3b045a0c.jpg'
          }
        ]
      }
    ]
  },
  pianos: {
    id: 5,
    title: 'pianos',
    instruments: [
      {
        id: 17,
        name: 'grand',
        imgUrl: 'https://www.europianosnaples.com/wp-content/uploads/2018/03/C.Bechstein-Sphinx-Grand-Piano.png',
        items: [
          {
            id: 49,
            name: 'petite',
            price: 4000,
            imgUrl: 'https://www.lindebladpiano.com/img/_files/george%20steck%20145376%20f2.jpg'
          },
          {
            id: 50,
            name: 'medium',
            price: 13000,
            imgUrl: 'https://antiquepianoshop.com/wp-content/uploads/2017/10/IMG_6769.jpg'
          },
          {
            id: 51,
            name: 'parlor',
            price: 54000,
            imgUrl: 'https://www.chuppspianos.com/wp-content/uploads/2016/01/Steinway-Model-A-Grand-Piano-Interior.jpg'
          }
        ]
      },
      {
        id: 18,
        name: 'upright',
        imgUrl: 'https://musiccritic.com/wp/wp-content/uploads/2018/04/best-upright-piano.jpg',
        items: [
          {
            id: 52,
            name: 'spinet',
            price: 1300,
            imgUrl: 'https://kawaius.com/wp-content/uploads/2018/04/607-Queen-Anne-Classic-Mahogany-1.jpg'
          },
          {
            id: 53,
            name: 'console',
            price: 1500,
            imgUrl: 'https://www.chuppspianos.com/wp-content/uploads/2018/12/Kawai-Upright-802-Console-Piano-Chupps-Pianos.jpg'
          },
          {
            id: 54,
            name: 'studio',
            price: 4500,
            imgUrl: 'https://www.jimlaabsmusicstore.com/wp-content/plugins/wp-easycart-data/products/pics2/Ritmuller-web-118R_sm1_b82799548aa51a7cf20ab989b5211739.jpg'
          }
        ]
      },
      {
        id: 19,
        name: 'keyboard',
        imgUrl: 'https://cdn.schoolofrock.com/img/news-article-hero-750w/learn-piano-on-a-keyboard1550004644.jpg',
        items: [
          {
            id: 55,
            name: 'beginner',
            price: 130,
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/71HQQWhlK9L._AC_SL1500_.jpg'
          },
          {
            id: 56,
            name: 'synthesizer',
            price: 1850,
            imgUrl: 'https://dt7v1i9vyp3mf.cloudfront.net/styles/news_large/s3/imagelibrary/a/asmhydrasynthkeyboard-J8TJFZSiiLUw4donRKUdFvPAwVuX_bRg.jpg'
          },
          {
            id: 57,
            name: 'arranger',
            price: 5000,
            imgUrl: 'https://www.bhphotovideo.com/images/images2500x2500/yamaha_psrsx700_psr_sx700_61_key_mid_level_arranger_1491686.jpg'
          }
        ]
      }
    ]
  }
};

export default SHOP_DATA;
