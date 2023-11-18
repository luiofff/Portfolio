import React, { useState, useEffect } from 'react';
import styles from './About.module.css'
import { Element } from 'react-scroll';

import classnames from "classnames"

export default function About() {
  const size = 68;

  const [titleVisible, setTitleVisible] = useState(true);

  useEffect(() => {
    const handleScrolltitle = () => {
      const scrollPosition = window.scrollY;

      // Adjust the scroll threshold as needed
      const scrollThreshold = 250;

      if (scrollPosition > scrollThreshold) {
        setTitleVisible(false);
      } else {
        setTitleVisible(true);
      }
    };

    window.addEventListener('scroll', handleScrolltitle);

    return () => {
      window.removeEventListener('scroll', handleScrolltitle);
    };
  }, []);

  return (
    <>
        <Element id='title' className={titleVisible ? "" : styles.invisible}>
            <section className={classnames(styles.content_block, styles.main_content)}>
            <div className={styles.main_text_block}>
                <span className={styles.title_mainText}>Привет,</span>
                <br />
                <span className={styles.title_mainText}>Меня зовут Илья</span>
            </div>
            <div className={styles.secondary_text}>
                <span className={styles.secondary_title}>Разработчик интерфейсов на React</span>
            </div>
            </section>
        </Element >
      
        <Element id='title' >
            <section className={classnames(styles.content_block, styles.stack_block)}>
                <div className={styles.stack_title}>
                    <span>Мой стек технологий</span>
                </div>
                <div className={styles.stack_items_space}>
                    <div className={styles.stack_item_block}>
                        <svg width={size} height={size} viewBox="0 0 530 472" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M364.5 0.600042C336.8 4.70004 305 22.2 272.7 51.3L265 58.3L259.2 52.8C239.2 33.8 210 14.9 188.6 7.10004C147.9 -7.59996 119.5 4.00004 108.1 40C100.8 63.1 100.9 99.0001 108.5 134.9C109.9 141.2 110.6 146.7 110.2 147C109.8 147.4 103.8 149.5 96.8 151.8C46.4 168.3 10.7 194.8 2.20003 222C-0.499971 230.6 2.8985e-05 243.9 3.20003 251.8C7.30003 261.7 11.9 268.7 20 277C37.7 295.1 62.6 309.5 97 321.4C104.4 324 110.6 326.2 110.7 326.4C110.8 326.5 110.5 328.2 110 330.1C107.7 337.8 104 362 103 376C101 403.1 104.2 425.5 112.6 442.8C117.9 453.7 125 461.5 133.9 466C141.9 470 147.7 471.2 159 471.1C186.3 471 218.9 455.2 254.1 425.1L266 414.9L276.2 423.9C312.6 455.5 344.6 471.4 372 471.3C387.6 471.3 397.5 467.4 407 457.7C417 447.5 423.5 431.9 426.6 410.9C429.6 390.2 427.5 356.5 421.6 331.2C420.8 327.8 420.5 324.8 420.8 324.6C421.2 324.4 426 322.8 431.5 321C452.7 314 473.7 304 489.9 293.3C494.6 290.1 503.3 282.8 509.1 277C517.8 268.4 520.4 265.1 523.7 258.4C533.6 238.5 531.3 220.8 516.3 201.9C501.1 182.9 470.3 164.4 433.5 152.2C425.8 149.6 419.4 147.5 419.3 147.5C419.3 147.5 420.3 142.4 421.5 136.2C426.7 111.5 428.5 79.2 425.9 60.5C421.7 29.9 408.8 9.60004 389.3 2.90004C383.7 1.00004 370.3 -0.199958 364.5 0.600042ZM173 27.1C188.3 31.2 210.5 43.6 229.2 58.6C237.9 65.6 248 74.7001 248 75.5001C248 75.8001 245.2 79.0001 241.9 82.7001C234.3 91.1001 213.9 116.4 208.2 124.6L203.9 130.7L196.3 131.4C185.6 132.3 162.8 135.7 147.6 138.6C140.6 140 134.6 140.9 134.4 140.7C133.7 140 130.1 122.6 128.3 111.3C126 96.8001 126 66.4 128.2 56.5C134.8 27.6 146.2 20.1 173 27.1ZM380.4 25.1C389.7 27.7 397.6 39.6 401.3 56.9C403.7 68.2 404.1 94.7001 402.1 109C400.3 121.7 396.8 139.4 395.9 140.4C395.4 140.9 389.6 140.2 381.8 138.7C366.9 135.7 345.3 132.5 333.9 131.4L326.3 130.8L320.5 122.6C312 110.9 301 97.0001 290.8 85.3001L282 75.2001L289.2 68.6001C306.2 53.4001 321.7 42.5 337.5 34.5C355.5 25.4 370 22.2 380.4 25.1ZM274.7 103.3C286.7 117.3 294.3 127 293.8 127.6C293.5 127.8 280.4 127.9 264.6 127.8L235.8 127.5L243 118.6C252.5 106.7 264.3 93.1001 265.2 93.0001C265.6 93.0001 269.9 97.6001 274.7 103.3ZM292 152C311.1 152.9 312.6 153.1 314.1 155.1C321.2 164.6 342.4 200.2 354.3 222.9L360.8 235.3L354.4 248.1C346.6 263.8 332 289.3 321.3 306L313.4 318.5L307.9 319.3C300.7 320.3 234.6 320.6 224.8 319.6L217 318.8L206.2 301.7C193.3 281.4 183.4 263.9 175.4 247.7L169.5 236L175.4 224.2C183.4 208.1 196.4 185.3 207.7 167.7C216.5 154 217.4 153 220.3 152.9C222.1 152.8 229.8 152.4 237.5 152.1C259 151 269.7 151 292 152ZM176.3 173.2C170.9 182.2 164.5 193.5 162 198.3C159.5 203.1 157.2 207 156.9 207C155.6 207 140.3 165.4 141.3 164.4C142.3 163.3 184.8 155.8 185.8 156.5C186 156.7 181.7 164.2 176.3 173.2ZM355 158C359.1 158.6 368.6 160.2 376.2 161.7L389.8 164.3L386.3 174.4C383.1 183.8 374.1 207.1 373.5 207.8C373.4 208 370.9 203.7 368 198.3C365.1 193 358.4 181.2 353 172.3C345.1 159.1 343.7 156.1 345.4 156.5C346.5 156.7 350.9 157.4 355 158ZM118.9 174.2C121.6 183.2 130.6 207.1 136.7 221.3L143 236.1L138.5 246.4C132.7 259.8 124 282.4 120.5 293C119 297.7 117.4 301.9 117 302.3C115.9 303.6 93.7 295.4 78.4 288C60.4 279.4 48.5 271.5 38.4 261.5C28.4 251.5 24.5 244.3 24.5 235.5C24.5 227.1 27.6 221.3 37.4 211.4C52.3 196.4 75.8 183.5 106.5 173.4C112 171.6 116.8 170.1 117.1 170.1C117.4 170 118.2 171.9 118.9 174.2ZM433 177.2C459.3 187 480 198.9 492.5 211.5C500.5 219.4 506 229 506 235C506 252.3 482.1 274.2 446.1 290C431.2 296.5 414 302.2 413.5 300.7C413.2 300.1 411.6 295.4 409.9 290.5C405.6 278.3 398.2 259.7 392.2 246.6L387.3 235.7L392.1 224.9C397.7 212.2 406.8 188.6 410.1 178.2L412.4 170.9L416 171.5C417.9 171.9 425.6 174.4 433 177.2ZM380.3 279.5C387.7 298.5 390.5 306.9 389.7 307.6C388.3 309.1 345.3 316.6 344.2 315.6C344 315.3 345.5 312.3 347.7 308.8C352.9 300.6 367 276 370.4 269.1C371.9 266.2 373.5 264.1 374 264.6C374.4 265.1 377.3 271.8 380.3 279.5ZM164 277.3C167.6 284 174.2 295.5 178.7 302.9L187 316.3L180.3 315.6C173.3 314.9 145.8 310.3 142.8 309.4C141.8 309.1 141 308.2 141 307.5C141 304.5 155.8 265 156.9 265C157.2 265 160.4 270.5 164 277.3ZM399.2 339.5C406.7 375 406.1 410.1 397.5 428.7C393.6 437.4 390.1 441.8 385.1 444.8C380.9 447.2 379.6 447.5 371 447.4C363.5 447.3 359.9 446.8 353.7 444.7C333.7 437.8 309.3 422.1 288.5 402.8L282.6 397.3L289.1 389.9C298.2 379.6 305.9 369.9 317.1 354.7L326.6 341.6L342.3 339.8C356.7 338.2 382.7 334.1 391 332C397 330.6 397.4 330.9 399.2 339.5ZM156.5 336C165.8 337.6 180.4 339.6 188.9 340.4C197.4 341.3 204.5 342.1 204.6 342.3C204.7 342.4 208.8 347.9 213.7 354.5C222.9 366.9 233.5 379.9 243.4 391L249.1 397.3L246.8 399.8C245.5 401.1 240 406 234.5 410.5C198.7 440 162.9 453.9 145.5 444.9C132.1 438 125.1 415.7 126.3 383.5C126.8 369.5 130.2 345.4 133 335.7C134 332.2 134.4 331.9 136.8 332.5C138.3 332.9 147.1 334.4 156.5 336ZM292.8 347.2C290.1 351.1 272.2 373.2 268.4 377.4L265.8 380.4L263.1 377.3C253.2 365.7 240.1 350 238.2 347.2L235.9 344H265.5H295.1L292.8 347.2Z" fill="black"/>
                            <path d="M253 189.5C238.8 193.5 228.7 201.8 222.5 214.5C206.8 246.2 229.7 283 265 283C300.8 283 323.4 246.1 307.3 213.8C301.2 201.8 290.4 192.9 277.5 189.5C270.5 187.7 259.2 187.7 253 189.5Z" fill="black"/>
                        </svg>
                        <span className={styles.stack_item_title}>React</span>
                    </div>

                    <div className={styles.stack_item_block}>
                        <svg width={size} height={size} viewBox="0 0 300 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M134.901 1.33C110.501 5.83 89.701 21.13 76.501 44.23C71.601 52.83 66.101 67.73 63.301 79.83C60.701 91.13 59.701 116.23 61.401 129.43C63.701 147.73 70.801 169.63 80.301 187.33C83.601 193.63 83.901 194.63 82.701 196.83C80.801 200.43 81.101 209.63 83.301 214.33C86.901 222.33 94.401 226.33 104.401 225.63C121.601 224.43 129.601 203.13 117.601 190.53C113.801 186.53 110.301 184.83 103.701 184.03L98.001 183.33L93.801 175.03C84.301 156.53 79.701 138.43 78.701 116.73C77.501 89.03 82.601 67.83 95.501 47.73C104.101 34.33 115.201 26.03 131.401 21.03C151.901 14.73 168.401 18.63 182.801 33.13C190.501 40.73 196.401 50.03 200.801 61.13C203.801 68.73 207.401 81.93 207.401 85.33C207.401 87.23 208.701 87.93 216.701 90.53C224.101 92.83 226.001 93.13 226.201 92.03C226.801 89.53 223.301 70.63 220.701 62.33C210.001 28.33 185.401 5.03 156.001 0.930002C146.601 -0.369998 143.901 -0.369998 134.901 1.33Z" fill="black"/>
                            <path d="M119.201 90.8299C111.101 95.1299 106.301 105.43 108.301 114.13C110.701 124.13 120.601 131.53 130.301 130.63C136.901 129.93 142.301 127.03 145.901 121.93L148.901 117.73L163.401 118.23C179.001 118.73 187.801 120.23 201.701 124.93C241.301 138.03 272.201 167.43 280.401 199.43C283.801 212.53 282.701 224.13 277.201 235.33C262.601 265.03 230.801 275.03 192.601 261.83L186.601 259.73L178.601 266.03C174.201 269.53 170.501 272.63 170.501 272.93C170.401 273.23 174.101 274.93 178.701 276.73C214.301 290.23 249.001 286.13 275.301 265.23C287.101 255.83 294.401 244.73 298.001 230.83C300.601 220.83 299.501 200.13 295.901 188.83C290.701 172.43 281.601 158.33 267.201 144.13C257.601 134.63 253.401 131.23 244.301 125.23C220.901 109.93 193.401 101.43 163.001 100.13L148.101 99.5299L144.701 95.7299C142.901 93.7299 139.801 91.3299 138.001 90.4299C133.301 88.2299 123.901 88.4299 119.201 90.8299Z" fill="black"/>
                            <path d="M35.3007 140.63C10.8007 162.43 -0.0993184 184.43 0.000681574 212.33C0.100682 247.33 18.8007 271.53 53.0007 281.03C59.8007 282.93 63.4007 283.23 78.4007 283.23C94.7007 283.23 96.7007 282.93 107.501 280.13C150.801 268.63 183.901 243.43 204.501 206.23C206.701 202.13 209.201 198.83 210.001 198.83C210.801 198.83 212.901 198.13 214.701 197.23C222.401 193.33 226.401 186.93 226.401 178.33C226.401 157.23 199.401 149.33 187.701 166.93C185.301 170.63 184.901 172.23 184.901 178.33C184.901 184.43 185.301 186.03 187.701 189.73L190.501 193.93L185.501 202.13C172.601 223.63 151.601 241.63 124.401 254.73C107.901 262.63 98.6007 265.03 81.3007 265.53C65.0007 266.13 55.8007 264.53 44.7007 259.13C32.5007 253.23 20.8007 237.73 17.4007 222.93C12.6007 202.03 20.8007 180.03 40.9007 160.23C46.6007 154.63 48.9007 151.73 48.4007 150.73C48.0007 149.93 46.8007 145.83 45.8007 141.63C44.7007 137.33 43.7007 133.83 43.4007 133.83C43.1007 133.83 39.5007 136.93 35.3007 140.63Z" fill="black"/>
                        </svg>

                        <span className={styles.stack_item_title}>Redux</span>
                    </div>

                    <div className={styles.stack_item_block}>
                        <svg width={size} height={size} viewBox="0 0 805 805" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M67.2914 1.58789C37.1914 8.08789 13.1914 30.3879 2.79137 61.5879L0.391369 68.5879L0.0913691 398.888C-0.108631 758.988 -0.508631 734.688 5.49137 749.688C13.5914 770.088 27.9914 785.688 47.4914 795.488C57.3914 800.388 66.3914 802.888 78.6914 804.088C86.1914 804.888 184.091 805.088 409.391 804.888C702.391 804.588 729.991 804.388 735.991 802.888C753.191 798.588 766.991 790.988 778.891 779.088C790.791 767.188 798.391 753.388 802.691 736.188C804.191 730.188 804.391 702.588 804.691 409.088C804.891 202.388 804.591 84.9879 803.991 78.5879C800.191 40.2879 772.891 9.38789 735.991 1.48789C726.391 -0.51211 76.6914 -0.51211 67.2914 1.58789ZM644.391 367.988C667.091 372.988 681.891 380.888 697.491 396.488C707.691 406.788 719.591 422.888 718.591 425.288C718.091 426.488 660.891 463.588 660.491 462.888C657.891 457.888 649.191 446.688 644.691 442.588C636.591 435.288 628.291 431.988 616.291 431.288C597.791 430.288 584.591 436.788 578.591 449.988C575.891 455.588 575.491 470.488 577.791 476.088C583.391 489.788 593.791 496.988 630.391 512.588C684.791 535.788 709.091 551.888 725.091 575.288C743.991 603.188 747.191 648.788 732.491 680.688C717.391 713.288 683.291 734.988 638.891 740.088C623.791 741.888 593.391 740.888 579.591 738.088C536.491 729.588 502.891 706.488 482.391 671.288C480.391 667.788 479.091 664.488 479.491 664.088C480.691 662.988 539.191 629.088 539.991 629.088C540.291 629.088 542.591 632.188 545.091 635.888C557.591 654.688 574.391 667.188 593.591 672.088C599.291 673.588 604.591 674.088 614.291 674.088C635.191 674.088 647.291 669.888 657.291 659.088C667.891 647.488 668.991 629.788 659.791 616.488C653.591 607.388 637.291 598.188 598.391 581.588C540.191 556.788 515.091 533.788 505.291 496.488C502.091 484.388 500.891 459.788 502.891 447.288C509.391 406.988 541.291 375.788 584.391 367.688C597.091 365.288 597.391 365.188 616.891 365.588C630.591 365.888 637.791 366.488 644.391 367.988ZM437.591 507.288C437.191 643.388 437.191 645.788 435.091 656.588C432.491 669.988 429.291 679.488 423.991 689.788C409.191 718.288 381.591 735.888 344.991 740.188C332.891 741.688 302.691 740.688 293.591 738.688C267.791 732.788 246.391 720.388 230.191 701.788C223.891 694.688 213.491 678.988 211.591 673.888C211.091 672.488 216.591 668.888 239.691 654.988C255.491 645.488 269.291 637.088 270.491 636.388C272.391 635.188 272.891 635.588 277.991 644.288C290.991 666.388 305.791 675.388 326.191 673.788C341.291 672.588 350.691 667.188 355.791 656.888C362.091 644.188 361.891 648.188 361.891 501.988V369.088H399.891H437.991L437.591 507.288Z" fill="black"/>
                        </svg>


                        <span className={styles.stack_item_title}>JavaScript</span>
                    </div>

                    <div className={styles.stack_item_block}>
                        <svg width={size} height={size} viewBox="0 0 428 428" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M87.5001 1.50009C71.8001 3.20009 64.0001 5.40009 51.5001 11.5001C33.4001 20.4001 20.3001 33.5001 11.5001 51.5001C5.1001 64.6001 2.2001 75.7001 1.0001 91.8001C-0.199902 107.1 -0.199902 320.9 1.0001 336.2C2.2001 352.5 5.1001 363.4 11.7001 377C17.0001 387.7 18.1001 389.2 28.4001 399.5C37.7001 408.7 41.0001 411.3 48.5001 415.1C62.8001 422.5 72.7001 425.2 92.5001 427C107.2 428.3 320.8 428.3 335.5 427C365.6 424.2 383.5 416.5 400.6 398.8C411.2 387.9 417.3 377.9 421.9 363.7C427.5 347 427.3 350.8 427.7 224C428 149.7 427.7 101.5 427.1 93.0001C425.8 75.4001 423.1 65.1001 416.3 51.0001C411.1 40.2001 410 38.8001 399.6 28.4001C389.3 18.1001 387.7 17.0001 377 11.7001C364 5.40009 353.5 2.60009 336.6 1.00009C320.2 -0.499909 101.7 -0.0999087 87.5001 1.50009ZM371.5 201.8C375.9 202.9 380.7 204.3 382.3 204.9L385 206V225.5C385 236.2 384.8 245 384.5 245C384.2 245 380.9 243.5 377.2 241.6C364.1 235 357.3 233.5 340.5 233.5C324.3 233.6 321.4 234.3 315.1 239.6C305.6 247.6 307.5 258.7 319.7 267.1C322.3 268.9 332 273.9 341.4 278.2C363.2 288.2 371.1 292.9 378.6 300.4C388.1 310 393 322.4 393 337C393 361.1 379.6 379.4 356.2 387.6C332.4 395.8 290.8 394.4 269.3 384.6L264 382.1V361.7C264 350.5 264.3 341.1 264.6 340.7C265 340.4 267.3 341.7 269.9 343.6C281.5 352.5 301 359 316.3 359C337.8 359 350.6 349.5 346.9 336.3C344.4 327.4 335.2 320.9 309.5 310.1C283.6 299.1 268.9 284.9 265.1 267.2C263.7 260.7 263.7 247 265.1 241.1C268.8 225.1 282.4 210.9 300.6 204.3C312.7 200 320.7 199 343 199.4C359.5 199.7 365 200.2 371.5 201.8ZM248.8 220.2L248.5 237.5L221.8 237.8L195 238L194.8 314.3L194.5 390.5H173.5H152.5L152.2 314.3L152 238L125.2 237.8L98.5001 237.5L98.2001 220.2L98.0001 203H173.5H249L248.8 220.2Z" fill="black"/>
                        </svg>


                        <span className={styles.stack_item_title}>TypeScript</span>
                    </div>

                    <div className={styles.stack_item_block}>
                        <svg width={size} height={size} viewBox="0 0 839 946" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M561.4 1.4C559.6 2.8 559.5 4.9 559 62.2C558.6 115.2 558.3 121.5 556.9 121.8C556.1 121.9 550.5 119.3 544.6 115.9C535.8 110.9 533.3 109.9 530.7 110.3C526.9 110.9 453.7 152.9 450 156.6L447.5 159L447.2 205C447 243.4 447.2 251.4 448.4 253.8C450.5 257.8 527.1 302 532.1 302C534.7 302 544.1 297.1 573 280.4C593.6 268.5 611.7 257.5 613.3 255.9L616 253V141.7C616 37.9 615.8 30.4 614.2 28.4C612.5 26.3 566.4 -4.50015e-06 564.4 -4.50015e-06C563.8 -4.50015e-06 562.5 0.599996 561.4 1.4ZM546.5 183.1L559 190.4L558.8 206.4L558.5 222.3L546 229.6C539.1 233.6 532.9 236.9 532.1 237C531.3 237 524.6 233.6 517.3 229.4L504 221.7L504.2 206.1L504.5 190.6L517.5 182.8C524.7 178.6 531.3 175.3 532.2 175.5C533.2 175.6 539.6 179.1 546.5 183.1Z" fill="black"/>
                            <path d="M76.5 110.8C49.7 125.7 4 152.7 2.3 154.6L0 157.1V218C0 272 0.2 279 1.6 280.4C2.4 281.3 4 282 5.1 282C8.5 282 53.3 255.5 55.2 252.3C56.8 249.8 57 246.3 57 219.7C57 190.1 57 189.9 59.3 187.7C62.5 184.5 81.4 174 83.9 174C87.3 174 108.7 187 109.9 189.7C110.6 191.2 111 202.5 111 221.3C111 245.3 111.3 250.9 112.5 252.6C114.1 255 160.7 282 163.1 282C167 282 167 281.7 167 217.9V156.2L164.2 153.8C158.9 149.4 86.4 108 83.9 108C82.6 108 79.3 109.3 76.5 110.8Z" fill="black"/>
                            <path d="M265 131.5C233 150.1 226.2 154.5 224.7 157.2C223.1 160.2 223 164.1 223.2 206.2L223.5 252L226 254.4C228.1 256.4 292.1 293.9 302.9 299.5C304.8 300.5 307.4 301 308.9 300.7C313.4 299.8 389.2 255.5 390.6 252.9C391.6 251 391.9 240.5 392 204.4C392 159.7 391.9 158.2 390 155.7C388.9 154.3 370.7 143.2 349.7 131.1C317.2 112.4 310.8 109 307.4 109C304.2 109.1 297.1 112.8 265 131.5Z" fill="black"/>
                            <path d="M751.5 109.9C750.4 110.4 732.4 120.7 711.5 132.8C686.4 147.3 673.1 155.6 672.3 157.1C670.6 160.4 670.5 249.7 672.1 253.4C673 255.3 683.3 261.7 711.9 277.9C733.1 290 751.7 300.1 753.2 300.5C756.2 301.3 754.1 302.3 783.3 286.2C807.6 272.8 809.6 271.1 805.4 267C804.3 266 788 256.3 769 245.4C750 234.6 732.8 224.6 730.8 223.3L727 221V205.6C727 192.3 727.2 190.1 728.8 188.8C729.7 188 735.9 184.3 742.4 180.5L754.4 173.7L758.6 176.1C760.9 177.3 767 180.9 772.2 183.9L781.5 189.5L782 202.8C782.5 216.6 783 217.9 787.3 218C789.7 218 833.9 192.4 836.8 189.3C838.9 187 839 186 839 172.4C839 158.7 838.9 157.8 836.8 155.7C833.3 152.4 759.8 110.1 756.4 109.5C754.8 109.3 752.6 109.5 751.5 109.9Z" fill="black"/>
                            <path d="M746.3 190.3L739 194.5L739.3 204.9L739.5 215.2L747.3 219.7L755 224.2L762.8 219.7L770.5 215.2L770.7 204.9L771 194.5L763.5 190.2C759.4 187.9 755.5 186 754.8 186.1C754.1 186.1 750.2 188 746.3 190.3Z" fill="black"/>
                            <path d="M406.2 316.5C403.3 317.3 399.5 318.7 397.7 319.6C396 320.5 341.6 351.7 277 388.9C148.5 462.9 151.6 460.8 145 473.9C138.8 486.3 139 480.4 139 629C139 717.1 139.4 766.8 140 771C140.6 774.6 142.6 780.8 144.5 784.8C150.4 797.4 154.8 800.8 193 822.6C227.3 842.2 237.5 847.2 249.3 850.9C264.3 855.5 284.2 855.9 299.8 851.9C319.2 847 334.6 833 341.1 814.4C346.1 800.2 346 803.3 346 654.9C346 517.3 346 516 344 514C342.2 512.2 340.7 512 324.6 512C309 512 307 512.2 304.9 513.9L302.5 515.8L302 653.2L301.5 790.5L299.2 795.2C296.2 801.2 289.3 807.4 283.3 809.4C276.4 811.8 266.2 811.4 257.7 808.6C250.4 806.1 187.4 770.8 183.5 766.9C181.5 765 181.5 763.4 181.2 632.2C181 544.5 181.3 498.3 181.9 496C182.5 494.1 183.9 491.9 185.2 491.1C201.5 481 417.5 357 418.7 357C421.9 357.1 653.4 491.6 654.7 494.2C656.5 497.6 656.5 762.4 654.7 765.8C653.9 767.4 617.8 788.8 543.5 831.7C414.7 906 419.4 903.4 417.1 902.7C416.1 902.5 401.6 894.1 384.8 884.1C368.1 874.2 353.5 866 352.5 866C351.5 866 346.1 868.3 340.6 871.2C335 874 326.2 878 321 880.1C311 884 308.8 885.8 310.6 888.7C312.5 891.8 395.8 940.8 402.9 943C411.6 945.8 424.8 945.7 433.3 942.9C437.3 941.6 482.9 915.9 558.1 872.6C665.9 810.4 677.1 803.7 683 797.9C686.7 794.3 690.7 789.1 692.2 786C698.4 773.6 698.1 781.8 697.8 626.4L697.5 484.5L695.2 478.8C692.2 471.4 686.1 463.3 680.2 458.8C672.7 453 441.1 319.8 435 317.7C427.7 315.1 413.2 314.5 406.2 316.5Z" fill="black"/>
                            <path d="M469.2 496C448 497.8 428 502.9 413 510.4C402.6 515.7 397.4 519.4 389.4 527.6C374.1 543.2 367 565.9 370 590C374.3 626.1 397.3 645 448.5 654.5C455.7 655.8 472.1 658 485 659.5C538.9 665.4 561.9 671.4 571.2 681.8C575.5 686.6 576.4 690.3 575.8 700.8C574.9 715 567.6 724.3 553 729.9C540.7 734.7 530.1 736.2 505.2 736.7C444.3 738.1 419.4 726.7 412.5 694.2C410.2 683.5 409.2 681.3 406.1 680C404.2 679.3 396.9 679 384.1 679.2C364.9 679.5 364.8 679.5 362.8 682C360.9 684.3 360.8 685.4 361.3 695C362.8 720.2 373.2 741.4 391.3 756C399.8 762.9 419.1 772.3 432.4 776C463.8 784.7 511.3 786.3 545 779.8C589.2 771.4 616.8 750.2 626.2 717.4C629.2 707 629.5 682.3 626.7 672C621 650.8 606.9 636.7 581.8 627.3C564.6 620.8 547.9 617.3 503.3 611C457.7 604.5 441.5 600.9 431.2 594.9C424.7 591.2 422.1 586.3 422 577.9C421.9 558.3 435.7 546.9 464 543C474.3 541.6 504 541.6 515.2 543C545.6 546.7 560.8 558.6 567.6 584C570.6 595.3 570 595 593.5 595C613.3 595 613.7 595 615.8 592.7C618.5 589.9 618.7 584.7 616.5 573.3C612.7 553.3 606.1 540.1 593.5 527.4C580.3 514.1 567.1 507 545.1 501.4C526.2 496.6 491.7 494.1 469.2 496Z" fill="black"/>
                        </svg>



                        <span className={styles.stack_item_title}>Node</span>
                    </div>

                    <div className={styles.stack_item_block}>
                        <svg width={size} height={size} viewBox="0 0 893 920" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M614.237 1.08114C591.637 2.88114 569.237 6.68114 548.237 12.2811C534.137 15.9811 533.237 15.9811 511.737 13.0811C490.937 10.2811 457.937 9.28114 440.737 10.8811C411.537 13.5811 379.737 22.9811 357.937 35.2811L352.537 38.2811L341.237 34.5811C313.837 25.6811 275.637 17.4811 246.337 14.3811C228.337 12.3811 190.837 12.1811 176.237 13.8811C112.437 21.4811 66.4367 47.3811 35.9367 92.9811C15.5367 123.681 4.03667 162.781 0.636672 213.481C-2.06333 254.381 3.63667 298.681 21.3367 374.981C35.6367 436.081 49.4367 483.181 67.8367 532.681C89.2367 590.181 109.137 626.281 133.937 652.481C169.637 690.181 212.737 696.281 249.537 668.781L254.937 664.781L257.837 668.281C262.937 674.481 280.337 684.881 292.737 689.181C301.037 691.981 312.937 694.681 325.737 696.581C341.037 698.781 369.037 698.081 382.037 695.081C389.437 693.381 402.937 689.081 408.937 686.581C410.937 685.681 411.237 688.581 412.737 730.981C414.737 787.181 417.237 803.081 429.237 839.681C438.337 867.081 450.137 886.281 465.137 897.881C488.237 915.681 519.837 923.181 552.237 918.481C573.637 915.381 594.737 908.981 613.237 899.981C667.437 873.681 693.837 822.281 702.737 725.981C703.337 719.681 704.437 703.181 705.137 689.481C705.937 675.681 706.837 663.781 707.137 662.981C707.637 661.681 711.137 661.481 729.037 661.381C769.537 661.081 795.537 655.181 828.837 638.581C855.137 625.381 870.737 612.681 882.837 594.681C894.437 577.381 895.537 562.481 886.737 544.881C882.637 536.881 876.837 530.681 868.837 525.981C856.337 518.681 847.337 517.481 830.737 521.081C812.937 524.881 799.237 527.081 788.537 527.681C782.537 527.981 777.737 527.981 777.737 527.581C777.737 527.181 779.337 524.081 781.337 520.681C833.737 432.081 875.737 314.581 885.737 228.481C892.537 170.081 886.637 130.281 867.437 104.781C840.137 68.3811 800.437 38.3811 756.737 20.9811C714.937 4.28114 663.137 -2.91886 614.237 1.08114ZM664.737 25.4811C727.037 28.6811 788.337 55.9811 828.637 98.4811C849.337 120.481 855.737 131.881 859.837 154.981C861.637 164.581 861.637 206.681 859.837 220.481C855.737 253.381 849.437 283.281 839.237 317.981C817.137 393.281 783.537 467.581 741.537 533.781C738.337 538.881 735.437 543.681 735.137 544.381C734.837 545.181 736.337 546.481 739.237 547.881C754.437 555.081 785.437 554.881 823.737 547.281C841.537 543.881 847.837 543.781 854.137 546.981C861.437 550.681 864.737 555.381 865.437 562.881C866.237 571.681 862.937 577.981 851.337 589.481C833.037 607.681 804.737 622.581 776.137 628.881C747.637 635.281 711.337 636.381 692.937 631.581L687.937 630.181L687.337 634.381C687.037 636.581 685.837 646.581 684.737 656.481C679.037 708.081 670.137 773.781 666.037 794.481C655.337 848.481 630.637 874.881 576.737 889.781C558.737 894.781 547.237 896.281 530.837 895.681C510.237 894.981 496.537 890.781 481.937 880.681C461.637 866.681 444.337 837.581 439.337 808.981C434.537 781.381 431.737 732.781 431.737 674.681C431.737 656.181 431.337 640.981 430.937 640.981C430.437 640.981 429.237 641.881 428.237 642.981C425.437 646.081 412.837 654.381 405.237 658.181C395.937 662.881 386.037 666.381 375.737 668.581C362.737 671.381 333.037 671.181 318.537 668.181C293.637 662.981 276.637 653.781 271.337 642.481C266.837 633.181 268.637 624.081 276.237 617.081C283.937 609.981 290.937 607.181 314.737 601.981C332.437 598.081 346.237 593.581 351.237 590.181C355.337 587.281 373.637 566.381 373.737 564.381C373.737 563.681 370.737 562.981 366.437 562.681C354.237 561.581 338.437 557.281 327.337 551.881L322.537 549.481L317.337 555.181C298.537 575.881 271.137 606.881 259.637 620.481C241.637 641.681 235.837 646.881 223.037 653.381C191.437 669.281 157.637 650.481 127.137 600.081C96.7367 549.681 65.8367 459.081 42.2367 351.981C27.4367 284.481 23.3367 250.581 25.6367 214.081C29.3367 154.781 45.0367 113.681 75.3367 83.3811C109.437 49.2811 160.237 33.4811 224.137 36.9811C264.937 39.1811 304.237 47.0811 344.537 60.9811L355.837 64.8811L361.437 61.2811C368.637 56.7811 387.237 47.8811 395.637 45.0811C417.437 37.6811 436.837 34.7811 463.737 34.7811C485.137 34.8811 499.437 36.1811 518.737 40.1811C524.537 41.3811 529.937 42.2811 530.737 42.2811C531.537 42.2811 537.537 40.5811 544.137 38.5811C563.437 32.6811 588.537 28.0811 613.337 25.9811C634.837 24.1811 639.437 24.1811 664.737 25.4811Z" fill="black"/>
                            <path d="M625.737 50.581C615.437 51.181 601.337 52.881 587.437 55.181L574.637 57.281L587.437 63.981C604.837 72.981 610.537 76.481 624.337 86.581C657.837 110.981 685.737 142.081 707.937 179.581C719.137 198.581 730.337 223.381 734.737 239.281C738.337 251.981 737.337 276.881 731.737 312.481C729.137 328.781 728.037 358.781 729.637 372.481C730.237 377.981 731.637 390.581 732.737 400.481C736.237 430.881 735.337 459.581 730.237 478.981C728.037 487.381 722.337 501.881 718.137 509.481L714.837 515.481L717.137 518.281L719.337 521.081L729.937 503.281C753.237 464.081 770.537 429.481 787.437 387.981C828.237 287.881 845.337 192.481 830.737 145.881C828.137 137.481 825.937 134.081 815.237 121.881C785.137 87.681 743.037 64.081 695.637 54.981C677.737 51.481 645.437 49.481 625.737 50.581Z" fill="black"/>
                            <path d="M437.237 61.5812C353.837 71.7812 300.637 139.781 287.237 253.481C286.437 260.081 285.737 265.681 285.737 265.981C285.737 266.281 290.137 264.381 295.537 261.781C328.337 245.681 363.737 239.481 387.237 245.481C408.337 250.881 425.537 266.781 432.837 287.481C436.137 296.981 441.337 323.981 443.937 345.481C445.937 362.181 445.637 404.681 443.437 418.481C439.637 442.081 434.937 457.481 423.237 484.481C414.937 503.581 408.737 520.181 404.737 533.881C403.537 537.881 402.337 541.781 402.137 542.381C401.837 543.181 404.537 543.481 410.937 543.481C419.537 543.481 420.837 543.781 428.037 547.281C441.037 553.381 450.437 564.481 455.537 579.981C456.837 583.781 457.137 594.881 457.237 651.481C457.437 717.881 458.437 746.581 461.237 777.481C464.037 806.981 466.337 816.581 474.837 832.981C487.837 858.381 507.237 870.981 533.437 870.981C541.337 870.981 556.837 868.681 567.237 865.981C607.037 855.481 625.337 840.381 635.737 809.181C639.937 796.681 641.937 786.181 646.637 753.481C654.937 694.781 663.437 622.981 664.737 598.981C665.937 577.381 668.137 569.381 675.637 559.481C680.337 553.281 688.337 547.581 696.637 544.581L702.837 542.381L696.337 533.881C684.737 518.881 677.137 506.781 668.937 490.481C664.637 481.681 656.837 467.081 651.837 457.981C623.337 406.881 606.237 364.881 600.637 331.981C598.737 320.781 599.037 297.981 601.137 289.981C604.237 278.281 609.437 269.181 617.737 260.981C634.037 244.681 656.537 238.081 691.937 239.181C706.337 239.681 707.837 239.581 707.237 238.081C706.837 237.181 705.937 234.481 705.037 231.981C702.637 224.581 690.437 200.281 683.237 188.581C652.937 138.781 611.037 101.281 561.737 79.7812C525.537 63.9812 476.337 56.7812 437.237 61.5812Z" fill="black"/>
                            <path d="M179.737 63.4811C142.337 68.1811 114.337 80.4811 93.2367 101.481C72.3367 122.481 59.5367 150.881 53.6367 189.981C51.7367 202.081 51.3367 208.881 51.3367 231.481C51.2367 259.381 51.6367 263.581 57.3367 295.981C58.1367 300.681 59.2367 306.681 59.7367 309.481C62.9367 327.881 70.4367 361.781 77.3367 389.481C103.437 492.981 134.237 570.381 164.937 609.281C172.637 619.081 181.137 626.381 189.537 630.281C197.437 633.981 204.837 633.781 212.637 629.681C220.737 625.481 225.137 621.481 238.537 605.481C253.837 587.281 270.837 567.981 283.237 554.481C298.237 538.081 300.737 535.281 300.737 534.881C300.737 534.681 297.037 530.681 292.637 525.981C275.237 507.681 263.537 485.681 258.137 460.881C255.737 449.581 255.237 426.981 257.137 410.981C261.037 377.181 261.437 357.081 259.137 296.981C257.737 260.981 265.737 210.681 278.937 172.481C289.737 141.281 304.437 115.281 324.037 92.8811L331.637 84.1811L328.937 83.1811C314.537 77.5811 274.237 68.2811 250.737 65.0811C226.837 61.7811 198.537 61.1811 179.737 63.4811Z" fill="black"/>
                            <path d="M672.737 264.981C639.937 267.681 624.637 282.381 624.737 311.381C624.837 341.981 642.237 388.381 676.537 449.481C681.837 458.781 688.737 472.081 692.037 478.981C698.937 493.581 698.837 493.581 703.737 478.381C710.237 457.981 711.037 436.881 706.737 399.981C701.337 353.981 701.537 339.781 708.137 294.481C708.937 288.981 709.837 280.381 710.237 275.281L710.937 266.181L703.537 265.581C689.037 264.481 681.137 264.381 672.737 264.981ZM681.737 278.581C688.537 281.281 688.437 287.081 681.437 294.681C676.137 300.381 670.837 302.881 663.837 302.981C657.237 302.981 651.037 300.281 646.737 295.381C640.937 288.781 643.937 283.281 655.237 279.381C663.737 276.481 675.637 276.181 681.737 278.581Z" fill="black"/>
                            <path d="M354.237 269.681C336.137 271.881 306.537 283.281 290.437 294.181L284.637 298.081L285.437 309.281C286.637 326.281 286.337 379.881 284.937 393.981C284.237 400.881 282.937 411.881 282.037 418.481C277.837 451.081 287.737 483.281 308.937 506.481C325.337 524.481 350.937 536.981 371.237 536.981C376.637 536.981 376.637 536.981 377.637 533.181C381.837 518.181 390.237 495.581 400.537 472.481C404.837 462.581 409.837 450.381 411.537 445.481C423.637 409.581 423.837 368.481 412.137 309.981C409.237 295.581 405.637 286.981 399.837 280.681C395.237 275.781 386.937 271.581 378.737 269.981C373.737 268.981 360.737 268.881 354.237 269.681ZM386.137 286.081C398.537 290.681 401.937 297.581 395.737 305.181C388.837 313.581 376.237 316.281 366.237 311.581C358.137 307.781 351.737 299.881 351.737 293.681C351.737 288.981 355.137 285.481 361.137 284.081C367.237 282.581 379.537 283.581 386.137 286.081Z" fill="black"/>
                            <path d="M707.937 567.681C695.437 571.981 691.637 577.781 690.937 593.481C690.537 603.381 690.537 603.581 692.937 604.681C698.737 607.281 707.837 608.381 724.737 608.381C758.137 608.281 787.137 601.581 808.737 588.981C815.637 584.981 832.137 572.981 831.537 572.481C831.337 572.281 826.337 573.081 820.237 574.081C773.437 582.281 737.237 579.681 720.837 566.881C717.837 564.481 716.937 564.581 707.937 567.681Z" fill="black"/>
                            <path d="M406.137 568.981C403.237 570.181 397.937 575.581 388.437 587.481C366.737 614.481 361.137 617.581 312.737 628.481C304.037 630.481 298.737 632.481 298.737 633.781C298.737 635.381 310.337 639.981 319.637 641.981C365.037 651.881 403.237 639.481 427.137 606.981C431.437 601.181 431.737 600.381 431.737 594.581C431.737 590.781 430.937 586.881 429.837 584.281C426.837 577.881 420.337 571.381 415.037 569.581C409.837 567.781 409.137 567.781 406.137 568.981Z" fill="black"/>
                        </svg>




                        <span className={styles.stack_item_title}>PostgreSQL</span>
                    </div>

                    <div className={styles.stack_item_block}>
                        <svg width={size} height={size} viewBox="0 0 925 1041" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 46.1345C0 95.5063 72.8437 940.494 77.7 946.16C79.3187 947.778 157.828 970.441 252.525 997.15C460.534 1055.43 458.916 1055.43 675.828 993.103C812.612 954.253 830.419 946.969 835.275 929.972C838.512 919.45 857.937 719.535 878.172 485.625C898.406 251.716 917.022 46.9438 919.45 29.947L924.306 8.40478e-05H462.153H0V46.1345ZM744.625 208.009C744.625 232.291 694.444 781.047 692.016 783.475C690.397 785.094 638.597 800.472 576.275 817.469L463.772 848.225L390.119 828.8C277.616 799.663 227.434 784.285 223.387 778.619C221.769 775.381 217.722 734.103 215.294 685.541L209.628 598.938H265.475C327.797 598.938 331.844 602.984 331.844 661.259C331.844 686.35 334.272 687.969 378.787 701.728C437.062 718.725 477.531 718.725 535.806 700.919C586.797 685.541 584.369 690.397 594.891 588.416L598.937 542.281H401.45H204.772L199.106 505.05C196.678 484.006 194.25 458.916 194.25 448.394V428.969H399.831H605.412L610.269 403.878C612.697 390.119 615.125 362.6 615.125 343.175V307.563H396.594H178.062V268.713C178.062 247.669 175.634 222.578 173.206 212.056L168.35 194.25H456.487C725.2 194.25 744.625 195.059 744.625 208.009Z" fill="black"/>
                        </svg>




                        <span className={styles.stack_item_title}>HTML</span>
                    </div>

                    <div className={styles.stack_item_block}>
                        <svg width={size} height={size} viewBox="0 0 924 1041" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.04687 25.9C6.475 40.4687 25.0906 242.003 45.325 473.484C65.5594 704.966 84.175 906.5 87.4125 921.878C93.8875 949.397 94.6969 950.206 191.012 976.916C459.725 1052.19 466.2 1053 599.747 1016.58C781.047 966.394 843.369 948.588 845.797 946.159C849.034 942.922 859.556 823.134 904.072 324.559C910.547 250.906 917.022 148.116 919.45 95.5062L923.497 -1.13003e-05H462.153H0L4.04687 25.9ZM755.147 248.478C753.528 279.234 747.053 306.753 742.197 309.991C737.341 314.038 637.787 314.847 521.237 311.609L308.372 306.753V342.366C308.372 362.6 310.8 390.119 313.228 403.878L318.894 428.969H527.712C721.962 428.969 737.341 429.778 737.341 442.728C736.531 482.388 705.775 778.619 701.728 782.666C700.109 785.094 646.691 801.281 583.559 819.088L470.247 850.653L390.928 829.609C348.031 817.469 293.803 802.9 271.141 796.425L229.053 784.284L224.197 713.869C220.959 675.019 216.103 631.313 213.675 616.744L209.628 590.844H270.331H331.034L334.272 635.359C336.7 659.641 339.937 681.494 342.366 683.922C344.794 686.35 372.312 696.063 404.687 704.966L462.153 721.153L526.903 703.347C581.941 688.778 591.653 683.922 591.653 668.544C591.653 659.641 594.081 627.266 597.319 597.319L602.175 542.281L404.687 540.663L207.2 538.234L193.441 392.547C186.156 312.419 179.681 234.719 179.681 220.15L178.872 194.25H469.437H760.003L755.147 248.478Z" fill="black"/>
                        </svg>




                        <span className={styles.stack_item_title}>CSS</span>
                    </div>
                    <div className={styles.stack_item_block}>
                        <svg width={size} height={size} viewBox="0 0 369 552" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M73.023 1.92665C36.723 9.72665 9.62303 37.0267 1.92303 73.4267C-6.57697 113.727 13.723 155.727 50.523 174.127C58.023 177.927 69.923 181.827 76.323 182.527C79.523 182.927 82.023 183.527 82.023 183.827C82.023 184.227 78.723 185.027 74.623 185.627C70.523 186.327 63.423 188.327 58.723 190.227C-0.176965 213.627 -18.677 285.527 21.323 335.027C33.723 350.427 55.623 363.227 74.623 366.227C82.023 367.327 84.623 368.927 79.223 368.927C74.323 368.927 61.523 372.627 53.523 376.327C39.623 382.727 27.723 392.327 18.723 404.427C9.32303 417.027 4.02303 429.127 1.52303 443.727C-7.27697 494.027 25.923 541.727 75.823 550.427C125.223 559.027 172.023 527.327 182.123 478.427C183.823 470.027 184.023 463.027 184.123 377.927C184.123 287.327 184.223 286.527 185.923 294.927C190.523 316.627 203.023 336.227 220.523 349.227C233.223 358.627 245.223 363.927 259.823 366.427C309.423 375.127 355.723 343.627 366.123 294.427C375.123 251.327 351.723 207.427 310.823 190.827C302.523 187.427 293.123 184.927 288.223 184.927C283.023 184.927 285.323 183.327 291.623 182.527C298.123 181.827 310.023 177.927 317.523 174.127C354.323 155.727 374.623 113.727 366.123 73.4267C358.423 36.8267 331.123 9.52665 294.523 1.82665C286.023 0.0266519 279.823 -0.0733481 183.523 0.0266519C88.623 0.0266519 80.923 0.226652 73.023 1.92665ZM258.923 185.427C223.023 192.027 193.623 220.827 185.923 256.927L184.123 265.427V224.627L184.023 183.927L225.323 184.027C263.323 184.127 265.923 184.227 258.923 185.427Z" fill="black"/>
                        </svg>





                        <span className={styles.stack_item_title}>Figma</span>
                    </div>
                </div>
            </section>
        </Element>
    </>
  )
}
