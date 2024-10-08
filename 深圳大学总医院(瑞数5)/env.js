function watch(obj, name) {
    return new Proxy(obj, {
        get: function (target, p, receiver) {
            if (p === 'crypto') {
                // 返回crypto对象, 避免代理
                let val = target[p];
                console.log("取值:", name, ".", p, "===>", target[p]);
                return val;
            } else if (p === 'Math' || p === 'isNaN' || p === 'encodeURL' || p === 'Uint8Array' || p.toString().indexOf("Symbol(Symbol.") !== -1) {
                return Reflect.get.apply(Reflect, arguments);
            } else {
                let val = Reflect.get.apply(Reflect, arguments);
                console.log("取值:", name, ".", p, "===>", val);
                return val;
            }
        },
        set: function (target, p, value, receiver) {
            if (name === "localStorage" || name === "sessionStorage") {
                localStorage.setItem(p, value);
            }
            let val = Reflect.get.apply(Reflect, arguments);
            console.log(`设置值: ${name}.${p}, ${val} ===> ${target[p]}`);
            return Reflect.set(...arguments);
        },
    });


}

// hook toString 检测
// (function () {
//     const toStr = Function.prototype.toString;
//     Object.defineProperty(Function.prototype, 'toString', {
//         get: function () {
//             const aa = toStr.apply(this);
//             console.log('检测到调用toString方法');
//             debugger;
//             return aa;
//         }
//     });
// })();

delete __dirname;
delete __filename;

setTimeout = function () {
};
setInterval = function () {
};
window = globalThis;

window.attachEvent = function () {
}

window.addEventListener = function () {
}


meta = {
    length: 2,
    1: watch({
        content: "{qr1QQJRoy0oGAX2D40k.A8xc_0h.p8SxqqVVapPWCle3sw.WDL53Oe9`ruJkQNK71d2itzeGsbKwywxLKdLUFry2uUfF_p7ek8W3_Tfz1D08hwfZDiL3MEf7UPW3QTO2CDHE3NgPKD4EQVO7Y1lIM2U69c31MTxTbb.wW35STtThZ2KbvPR3wNOGbDVERwg2boU3g2f91DA8xJPhDr03byshnajVYNIKVTIYTr9K2RzROxeV0TBsufBhsph3DpPIPxe86fPiKrO3v7PwvzT3ORGMbxaEvJ4QbxcEGE5lDReYCpKVmmXAKNlpDz.I0wxMUT7hrRYA6zc3GJGpKxwE2S4UCE33lrPKPxR8TpPmKrH32wslcaJAqz6psLR8SYLoKE9IPrpwlx5isYdFOA13kePxnEP8nmP3bq_3OaPH6753veGEKEyEOf4iCEmEv7dD6Lrps35WO7jR1NDlvasM1wVD2lYhmeYco7h39pGoDEDEGY4qDxr3rzPqnE88STPUbqD3ffsK1SowS2msDrhMrpIcoLtRApUh27hU8NBLusR3HRP_ch.85NPjCke3XVPyoBv3jrG5DhPEXm4dDhWE.qZBYMsMQSqyVHO1HT8nKkSIzeOjl.QhtpYZUBW3LTGTChHE7N4nKtt3JxPScho8ZRPfCkR37msGPnwi73_nKOFIex2GVsmpzz6dY4IK8TxbksG3W2P01hA8eJP4Dc03jgP.UXL3X2G7Ct.EjR4NKtUEX9ZLljqUt23ebPMILzDLb8MJXpkXoF6hiTYzvXT3BRG.btaE.J47bhu3xYPO1tW8gePnDcA3LNsnnuF8EwRCK1yUgyeC9KJFJGyaltRFhTB0s1B3ErPbPtR8ypPTKcH3NQP9vXp3zxGPbJ7ECe_MbJ8En3ZJoyEA0zw8UyvFv25IDTyRupQpKYih1NVI6N53uef3KJyE6f_8CW03KSOwPJT8vrOWKm.36J1kc01i6Rgs9QAFTJrQ0ydHYSFAmemA0S5kOYC3YzOAnJ882TOobmD3TGOK6NF3SzfsKJYETp_YCJfESZZr0xN3sRfq2qjRfR6HmgFiUYEmbEyhUJVxoLv3CrfiDWPEnm_HDJe31wOHnW_8O2O8blP3up1w1TNAATgWkLZM1pGt90Ri1fTksZ.wGJXpuVe3pxOrcWo8GROpClR3alOqoLk3TSfrDW8EST_DDWLETAZDK7E8kJCtD9dw9eq1uGNISqeTUBahMfV4U.L3_2fZCH.E5R_yKib3IyOgcHO8XxOLCo23dT1BPCvReex0YI8YeN3Lk4LKzrZTKImptNXBkUl3wYOu1HW87eOPDoA3ZLOnU.l3gYf6CHoEZx_aKHuEg04SUdbKBm760sT1ixQ5YUeMQl5O0u4h3mV0v.p3yxfnbi7E_e_.bHB3MmOj1iL8jzOyDDZ3_R1yn6gwIYogD1oA4eTPY8_KxpLvVilsFYXesKk3FSOzPiT8.rOZKD.34WOOvjJ3Zyf2biEEgz_Pbi_EZL_PvXIURxIGKiHi_p26bbs1hpzLmn1hQyVb6jF3ezfOKiYEyp_2CHA33fO9PipRKSZhUy6IDeJtkEa3TewwTwgFvJUU2V4YVfv19R5UPmpWPNtIbwZIuS_RU2ZivyPIoAZwCYCIkw5FUSSHor2Q6SeHqWbQPp1p9WLRoJmxvwjKl2AF9RHUYxJWfwhADYkIrS5poS8HmT2KoaRI9JZKuSKRYYZmvyiImrJlsEEAaQGQCwgYqwRiY96x6SmHvZ2KOfSFnLpIOyZEkaOR1xZ36g2Ik0ZHDVdIof5Eoa_Hk22JoalHoGbk9V2IkZLWvEz1cVLE60o11zShkgPW2ShcKVlIlY5o6aoHqx2qUScIfNZokaIRpyZU6grIr2JKOxrwry4l231xqNyJPl330NCcnIPE8RpLc.3IBmZ_suLR8zZNo4ZIi3ZyKUGItm556uOHHy2dUuHHhlvgK.7pBfQ5T8XF80P_KOPFBmsSKMdWjYhubUJIEy5TvuEHWz2nvnhIzTZSsulRQwZGo43IWxJGutEx8rFf6u0pJY2C1o_EBrV6VHCUgJUb1.vI7fZ0OupRFSZ4U_6ItZZjbKNIiN57vn9Htw2NvnKHigLfVFcU.Q976bxth7bvmd2pRJyzoPAWXxhzCKCIHw5jUnSHhr276uWINpZOOnJR3fZnU_sIEzJSkhp3exuOn8bFhSfX6bb3jwF76KR1ERpTPjXILJZbunKRRYZTv_iIxqZ9CK1IJJdwUTzHKS9M6TRH1QNITSV1VrZUmYJxVfysCmwU9NkFT2UWnztIDpdIsfd3oT_HU29wo0TICeewuTnRomeWvejIVSWksJO1YWNsT2VEKzCpYpPRVSk8my0E9rKknzTITNeUkTIRmyeo6erIY9eKDpMIppdsoTKHYY9VoTGHpSApCmgRpYOtCWo8OpvJVAHKAVGIKQEW6rtxKAGIKmdi60OHsy9HUT5InReik04RkNe86ZzIsYWwOWRtcegl2VVpKyZJlVg8SwTWDWXwkRApc7ZISTers0lRqweAoZ3IAEeqKAQIYTdr60IHpN9DU0.HYYsmoW7tpqf1TytYuSfJYZa1dJf5mMmW42t_bsNIFNdZv69H8w9yvCvId2egs6GRiJeBod9IIyWBuHUY8EP0bMoEFfKjmkx3FxiT1h135TGB1B4IepeuO6JRWfePUdsIQ7eSbsmI3Rd6v6qHQJ9av6nHRx1SV4TK8pEC1HCwBmYf2BWUIGN6T.FWgRt0Cs1IRJdzUCzHFS9.66LI4rejOCNRtpeyU5dIFwWgkixpBwF2TntUipK_TC8VyzubbKDxjyA5PXcI_eezuCnRhmeZv5jI3aeOC1iIQed9UCxH3f9P6CTHQzYbUtHp3z5j6nrIFTbSDIlxFpcn9KuWZetbD1MIwpdOoCKHRY99o6pIgze9uyXRCT5hvSCIbfHtsrk8kJAU6mSxTrlMbz21lRfKo2vUKxuWnfxIDR58ky4R6N5i6SzIvV5wDw6IOrZFoynHvmvsoyZHGrUsTqYYlfEY6JHxb2o1cRoUpSgD0pQWrpxAKwQIfTZp6yIH2NvKUgFIlx5YkyURTR5m6SxI2mHlOryt6ruwop78SwaclfepP2_x1VbR1JuFcGAIk25EsgGRnJ5Ioa9IOg5HKQgIv2ZE6g4HORvJUgoHv2VD9GMQDz.m9W7KcJccPVc8fS9rlVoWmTxrbQmI9RZovgqHGJvqvykIqY5osgQRSe5KoaqIfNHKuq5RSf4Wl7TEVNLW1qh8PqZ_o.JxerOL1OIIHr5_O4NR5p5NUudIXQ5gbIfIjxZ5v4ZHBevdv4iH.RYyPsxpzygdYu6IZSr4o.x8jeoybM5WxNxuCIiILeZ0U4xH7fvn6_lIJS5SO4mRZr5GUuMI7JHvkkyAezo_OuSEERfyUB3QIese9KV8wYsvPObIWz50u_XR_T54vnCIjG5jC8jIXzZBU_2HjpvN6_pHXeFbbFLQiwTN6KjKyTy7VFZFxr02VtRWiJxzD86IBrZjo_nH.mvOo4JIxw5Ou_tRg25nvn1ILpHSscPphxgLnFZR.N3jPBExFRCzvkcRLpYTnPzIEx52k_URyR5T6nxINl59D8sInSewoeXHCTbFoe3HnpMUVpAAbQGMlJ43bRhIcxbVvejpKraW1fEIKRgIu2e36e4H6RbwUZCIKydQkeuRvxdW6TYI0TikOm.wlwhMUgV3Kr0Q1zQYCSYRCrDUvz1kc20IVYdUseQR2edDoTqITLdKKRVISYes6eUHTxbVUeOHSTMtl313PWbrm361pw2l1LXVqTwQm0JWUmEEb3fICxeivZZHuebHvedI1mdisZgROzdwo07IuRiwulVIDygq1lRIOf_D0EmpcQ9Vl9OVATVp19uIpSdrOZmRGrdAU0MIaWdob3wITyervZ3HSzbDvZjHTNMkTAYRkyIs9aXKAyalVU0Y8YlebBPWMyE_CMjI_zedUd2H5pby65GIIfdgOdfRBSdBU6vIdeiXkoQsWSnS9U4Uzx8elu8x_pqNo46p7enGPv_IwwduudtR72dPv61IZAdSCMDIgweCUdrHZrba6dzHyJF6K1l83Sv0Uu6EeLfT24k3efTOU.eW3wE0DMsI5Sezo5XH_TbjodNIMJdju5bRjYdyvC5I_rigsDlxIyKX0HP34r491U_ty7.X0K5Q3TV5nbrIFyd7k5uR.xdZ6CYIg0dODFHIZfe9o5tHg2bfo50HZfRXTtLI.zvG6PTEjxU2mXkRQzo7KXVWQSEbKFVIeYeO65UHyxb9Ud1I3NgMkfB3Kygh6NS8D2xtORJwbA2AUebIDrh8mJoVoTRwPmMsvz2WcyE8bmg8sfg3UzgJoN78o3gwKma8km_F6fuilyfsUfdiqmIlKSGxGffYnTi89Y6IlrX8mzYA1JIJfYHUbmw8ry_pvf3imzfKvGM89TgYsfV3YwgloNE8mxxlu3hhsxzimlupumuEbaVQPNfx6qIYPe2F1gU8OfgEOGf3sSgIULv8kZgibly8oN_EvG0ikwfJvGDioyIo0QZA6mhYlqcV126V07fsczRq2GbJ2xHrClD8lw_DUGriqrfq6fQ8GpgoOGw3pfgKULk8rzxYk3TErz7WnqpMOm5kPA0p4msSTuHMWf2NP488BJg_uOb38YgNv.58iqggCoP8tJ_yUOeiHSfd6Oxihw3eU.GUdSlz6DOYQZ2Z1Uy8HWfemvpJNzHuDoH8Ef_0oOtiW2fSoPm8zegSuOc3QmgGv.F8JSxvsMZEWNPam.yhQmleUiHpdYkT1oZwLz2vn4287Ng.kPB3Fyg46jS8t9gjDD.8ip_BoPbitYfLoPAiiSFv1H5iN2Y22tDVyRA5TnaxipXvbCLJXrHzKDa8Hm_j6PuiEyfOUOi8NRgPkPh33Ngn6jw8EYxSOF9w_TsOon_IRwrGOjAxxfn.D8PMhpsTc_78LTg2sPV3Rwg0ojE8xEg9Kr781T4w62BiKNGFU2Mi1YFRUpXMkSvFmN3I9fVsUeOUoZ4AbTOJn2i8bry8sN43v20iUwGwv968C2yQs2a3oJykozV8VyEkuw0UC7vwvJLIv7fKcqQUCw7YmJbRDwVk1e.80pyUO2w3mfyDUzk8Y7yYbrY8pR4sv2AiYJGVv2PiKxmDUy4Ecygku7CIOelho9m3qecDoatJ6RiECqP8KJ4xU9eisSGH62g8nryiO9y3kpywU7B8swEQkQJsueSMYW13azum00KYrwHmllBxpTV1PZn8Seyru9c3qmyAv7F8payoCq88Ye4qU9RipfGD692iYzmcbEFYnNesTg6QpT64lujpzTezDk2J4ei_Dk.8Fp4dovbi8YGgobf8dzyguv53HTyBvBb8IfEXsIoVIx4_UMuYJz0dv_BQj0b4oCSi5N1Gndy8eRynkvh3WNyP6Bw8QVySDko83r4CovciQmG6ov7iRrld649V50faChqpd2ePmsN8wwGC1oQJgpi0Kc788T4z6bBiFNGjUvj84xyNkbv3tRyy6Xy8FmEgO8wE_pBPTIGYy2t9VC6ptrC2lcqI8e15c5q8_2y7sba3hJyuoXV83gyOKcE8Q2496bhi3RGfUb6iQ2DNDtbxzwROYcDRWfCLmvmp.zHOo_6JZTi2bcY8wR4OvbAiRJG9vvs8oY_MsN73Ce_tofa8bNhtupMKvSMRm2RAVxZFUy3wkyX1UJZMme6W1SH8Dr_8ONy36p_JUfB8vQ_QbJS8OxgFvNWi9eOsvN5iGRmw6NcE0rHpDxqp609I0yq3lm539xXJqNJUCJ88fegAUNRi2fOK6LV8lS_YONY3Tr_lUfh82JhMkA1psr9kbE8UAr3h2LWVqwuhCW8IreUMPaK8kz_EuL53uT_IvGb8OG_iCW_8vzghULTiOpOJ6LrivemcoZxhfpRH991YqTlWnEt8fJclVaRJmJJrDWo89rgDoLciGmOooNw8qw_ouLF3S2_KvGc8fphYsAXYSycpcQTRGpAk9dNRHJdamc_xwxpNnuw8Hx_yk.v35R_N6Oy8Xl_gDHO8.Sgyo.5iBTO5o.Ei.pc60UAYiel40nXpI2sabHsYIfu5PIqJxfJuKHE8L2g06.hi7ROSUjD8Jy_ak.k3Zx_G6Om8zThvOsv18zdTChT8JqOOohEVHJQ4DdsYQpvvcu98hY_.sj73_e__oPa8jL_jKi98XYgB6jvijxOLUjsiXTkfC5Ax.LbBYiZKyeuOoiew3w89C_.JimJ7biS8BxgjvjWiLeOOv.H8xm_PsjE3gz_SoPQ8LRhSu1ywhAO.luMMNZXBc5PMgpquoHqYRypT1nO8ES_2OjY3yr_0UPh8NW4Mbxz8nyywvzLiCzPFvzFinNcMYLnx9JpAmzqVYTR8KxtK9rcpnr1J1yW8Cx_8uzyMUzTi6pPw67a8Kf4QOzS39S4kU2U80etckYa3YJKFvfHU22qs2V8wpevs0ympGmAlPTj8Vw4UuzF3224Dv2c8TA4YCxK8Swy1UzpiTrPV67wiCJrE0QAASwSoKqSKkmGDvLhAcz8hUaJJUwWEDEO86Syxo75iuTPiozy81J4iu7C3OY4wv9X8urtQsVE3srbcoZWs2LOEUq7QGS4EvAPQsxK1n0S8py4qk7k3Gx4A69m8S04oDEI8Tfyqo7FiS2Pmo79iTfq1Vq_Y9NGkYRtM4rKyl5Tx7mMZTHlJMSW_Kh98_Yyd6Bvi5xPgUXP8IN4dkBd3By4B6vf8d2tXOUqxJyv_1kYVXfXnPUQRwRHNT6U1WfbGc6g8wm4nsBE37z4fovQ8Z34SKhq8gmyC6BkieyP6UBBiymq00dpQJfsZ6.Viwp5PVd7AXpKCPsIJ3YW.btz85yyzvXLi_zPjvB.8MT4NsX93jw4gobg8_xtguKEVEreNUilUXmG921GsFxkb0sBELJb51Co8Ff47OXS3LS4uUbU8gZ4Pbtx8ZNy9vXligwPfvXCiZyHNvX984yeBb543WxZf26JwQaGNVPaJQxW2CtK8ewyPUXpiyrP96A7wvp0MOpzMKf0tURuwDzmxkNpIlw.x1N4Y9NdJ2r2YP9zQlqfscwRJPxiwbJ08upCMUY0JvRXwoq0QCTnwkJCYUpJJlSzs6pyJqwrMcehtY2fKo29190XMuRgMvpsIYN6iGzkUDTIwrfCAopFJm2zYoAYw9e0Yup1MYm0lvRtwcSmMsLMQUrncDqFYprzQv3ZVAmRxlZJKPpIMnEYwON0HkAdMsy0I63fwk90iD04wopChoACJkYzWoAqJoSrJD9.FT2Bxs3uwmS0kUAZ8OrGoUALi2rkrK0qwlmCD6AkJryzoUp8wGR0DkAMMpN0K63JwrYmYOLfYpRIcmq_QuyX_mu2tww4gvdGKweRNchQwBT0yss9M8w0LoMgwiE0gK6ZwhTCy6sdJHNz5UshJhYc4KdOtXTAL95nKQzQjUkVAixQ2bBsiN2knb6xwENC0vslJWwzSv1owz20assqMQJ0voMlwJymvu..I7Efd0.a8BTBOojVQEeH5vIXMWzNv1tMw.p0.O1zMFf0_UFuwt70NbC2wiRCBv1GJtJzLv11JHxyd61eIiqNGCbzMjmz71CKFNpM4TcjiXRk7CCnwHJC2U1JJESzO6sEwNr0PO1xM3p0SUFIwEwmakjHVLfjNTjgQze.fV_MFWEBBDPrte2NCPtPwLe02u11MRm00vFtwKaTMCSXw1e6QUYNJKf7F6YYJ1z4InanIKmV3mNRwbfO3vzc31wOQYpsinec8DS4wsp6MoYCJUY7QoVSwCzTQuYiMlTTkvwKwVflcszmEVRtw6RRUmrAVCSJ3rzpIVWMAKmglnJNw0RTKkYMMmNTD6wJwYVTYDSUwpr61oY1JYm7hoVQJKr_D99TVvS5JTlCwAydW6WO3qrS82lWi6pcEKaZwUT6x6VdJsN7iUY_wnxTJkV6MkRTw6QNwsmlQO7Z31x7JvgB1kR1q2aJJTJjoTGF1cf81cWawS2TqsVqMqJTUoQlwpgToKa3wY26q6VMJpR7mUVvJY2e10WsUpGXkUs.18LG4CuPAwTHzb.6i4Tcybu2wFR6dvUGJ8J7gvKOw5YTdsUZMHeTXoIGwINlXuBZVIwL0loPK7JX6lotKHp1T1v0MQYLG1HdwerTnOUxMWpTfUIIwQQTaburw3x6CvUQJwe76vUXJRRedmBoKHrFCvhH1eqfe2kssHzFZl65idNc.CnXw8e67UKNJFf7j6U9w4STNOK2MtrTgU84wFJldkXT34SObKb7wh7j2m8H35N5v0cTQhT3dPiDw_zT7uKiMETTuv8Kw3GTPCntwQz6vUKmJ3p7f6KSJQeZ.TjkMEpW7bbM3Mmkz2_uJ_9zGo_diZJc2DnUwwr6PoK1JRmBMo3zwowCMuRjMC2CtvpnwbpoxsfB1lr6JK0eYCNnioTuEPpAwCT41CY4JnrJwDxCwkR6M6RCJ6pNwvlCQDeuwGS0YoRiJ9TB1oRgJGpdQTf6I9ymlvR0QbNyD1eJhog0F2SqiqfrUKe3wf20A6RMJ2RBYU3KwlyCVkRsMTxCl6ATwPToMOG2UfxaQowSIGrQHC9MVq90lny5Qcz4McqVwcYCHs3ZMueC8oAGwOLCiKZ0wvY0h636JOxBWU3kJvTZiD0T1mmXHDGPIcpiqbEBI2maU2gMimmrqbZrw9x0Dv3QJfeBovRIwqmCDs33MSzCYoAWwfRoYuGFpp3Oxm9L14YzZmvbFX3LuPvbV8x.N1kswHSCyOM2M5rCLUs4wXWCdbdew.y0yvMgJBzB5vMtJ.NZ_K_OIdN84YUaUjeYnmh7KxRKaVUPixyrnCdtwLz06UMmJ7pBS6FqwJfCaOMrMeSCvUsowzeobkOsFIlLgviHYHwc_CtYVBA.eTniUByMgPcFwhwC.uFjM_2C_v1nwjACNC5bwXw0XUFfJjrBL6FJJBJngUcaUMTBz6IvK3rQb1CUANePzYPwiiwr7D5uw7S02oFiJLTBPoMxwxJCPuFDMgYCSv18wLroasPDYRTabviOFLxhSY_sE.Jk92Xm14r.CncfwEyC9kFsMyxC06YTwC06MDyBwnfTQowjJC2XRowVJnfuV294UKRHwnyoMm2gKoTcA6xgAoRVi1Sq8Ky0wuYTM6w6J6xXQUQnwKN6skwHM9y6k6Ypw02DcO2H3G3TA9yewm7O8bT6Q0pQR2R_MDyQlcmLwVm6Ksw3M2z6moYWwT36YKyAwSmT16wsJnyXhUQIJCmnkU3VF6Y5mTQgAae6h23ZYogOcCZHiUYqHbgew6yTxvQgJuzXivw4w1T6JsQ0MOw6QoVLwuxDQu9t1nRwrCZKVPRjoKWxIAxAWbaBMGrF11l6wpf6qOQrMfS6UUVowSZ6DbgRwTNTqvQVJSwXmvQbJTyShUJDIVZNS1hsVIrEe2urVJpPy1vCiMxqyC4bw_wT5UIfJ5rXg68Zw8p6dOIeMBf6XUUOwdzDzkvusJSW6TMEQFzcTUOnUxREg6IN3zxFfPo5wwJ6nuIDM7Y6fvU8wZq6aC4cwgJTSUIwJeSX66INJywadndlU3m8ZTnc3zNnTYo2YHajTCjriIzq.D_Bw5fT7o8jJ_2XNoI2wMe6Nu8PMjm6gvK_w4SDdsbyVj2u2Ctt3XpQv6ujY8gTvsK0FMyFdnDmwFN6Ok8HMLy6u6Kpwg96PD_hwZpTvo8DJgYXGo8aJZSaNV6q8NyJBCjRtQpxGVbcYyZTnTF5iQrq2K_AwemTP68sWDyNMUqXQvRaFkr.FKNat6xeQDYrxOyG1m37p9948v2XwmxFYvpMKvYZMU2eJcRWQbTawsr0FUwaWoxLQoEaQK2WQqTnY6rHWlNN1Ur4WqYaMvRgKmf3ooRCsvwHRPaR8vWNpmesHG2oKb2RQrNnAvrVWmwNYvqUQ92aVsrAFYJaMoE0QcyrMugj1OeVEK7fQqJYx6g9V6zuDvQOKnrzM13hQPpaHOqeFsfa8UEOQk7aJb9TQoRnhvqaWkJNWvqcWlxuYK3OFfzDm2xhtcyaqDGOspNiiba7H2RoqC9cQlJnrUqwWrSNo6r3QGraDOqRFppaYUEHQrwrVkg1xkpLk2Haw8p6nUvrxJTsyPBBI7NwjPM1QBeayukPF8maLvh_QHaadCv5QhengUkyWHfN56kmWhzuLToKUzYuSKurs_w1e6H3QQZ29oUmHNeonDvhQEpn6okDWWYNaocrQzzaauk8FwTavvhDQJfrbs4RsLw1aP4uREzXO9dlIBrF0Y4TRjpzgnFRQ.Rajkc.FFNa_6teQtVaNDbvQirnXocPWtmNBocWWHruXbFlKNwN2o8EV4A9vK.NA4wpXVPFHXpo7KbWQWTn26cHWENNPUktQNxafkcoF3RaS6tRQEmraO_qRt2E925QRQmjLmj_UQy1OVPHKheeCcFGQL2a9scAFRJShoJ0QKgSMKfLQ12uQ6m.WKRLRUmUW12z1lNVhmSYUY2ZA9rhEbfeWTm8EbYvHnTDwbfTQsRuMvmaWUJLQvluQTYSssmWFleScoJAQVNqcueRR0yERCpktb7L8v2HFCz31UN2QKTZl1wBQ0rSKOmRFmpSmUJHQYQSVbfpQpxu1vl7W1eLhvl8WKRBoD76tazzWUgXFaYxRV9QYcq7rCgEHCNDHCG5QUeuEUlyWsfLi6m0QnSSJOlTFkrSQUW.QsJqskZ1tSf3kYVhQpSCkm9ch1AuoYgQVSyZsPQCQSzSqul8FrTSUvWDQpGSDCGFQYzukUlYWppLm6lfWYeXl00uwz2XyvM3sM7.Z9d0AXmnuUvHH4JDyDOvQFru5ooPW8mLdoDeQ5wSduo_FH2SXvHPQIpqzsdNFXlL42svU7NzCc6jpizo90IrMiNQfnIeQexSSkooFWRSf6HRQQlSaDOkQRSuSoo8WwTLCooLWRpNyU5HI5GLCsHBFBxA41dVMWYLjvPGHdfD.KPLQ82u76D.WFRLNUobQ4ySLkDOFtxSg6i2QMTqdO5vwEY7NCI9whxvfnbeI.xjXb.Bh_yZdc8lQyYSOsDWFEeSnoiAQ3LSPKPlQQYuv6DoW3xLGUDuWQTLXluIYRJWBDK7K42caPP8pWZuPPjeHZmD9bPpQwxuPvx7Wbe.MvEBQomnFsxLFCznxorZQbRkxuSyVmzKs0SC822rwY7ft9xyADLfYvmdJ1pkQDSnwOxTF6rnWUr.QvWnsbzJQGyaYvxEW9z.1vx_WGN.Uv01hC3XM1ePpm7.U0zopbraKKe0HqymKCzFQfzasUxYW2p.Y6EAQlfnVOxpFnSnMUq6QPekFkau1qN.WoQihpSJi6EkwUfstTlbFApIQPAtQcwnHuE_Fu2n8vqPQOAnJC7CQvwatUESWOr.W6EeW9JNi2VtUkRRYTGuKqSpx60vwm9axoLzHmwmqD7kQ2SaroE8WfT.DoxRQqJnDuEKFSYnYvqiQfrkVsaxROTi49.lhhlaTK.M8wr9zocnRizIjnspQHyngkhOF5xnL6k2QB0ndDBdQ.fagoh_WB2.eohlW.fb4066tzV7y96.QWJZ0P5WsIrlgUI9HxSmnKBlQLYa66hoW7x.aUtcQJNn6khIFeynv6krQz2kbOuiWEfFnokPUJTTymHZxdztOl1_hgwRgc13QhmnjstLF_znyocZQj3nNKXGQXmaX6tOW.y.BUtHWBmvfU8GMtWvB1noYET69n8.sipXyljdHiYmObXJQ7ya2vtEWLz.PvhhQxTnfstlFgwnaoc3QLxkauntsE7LacFOtMlN91Pgte24uKjQh_2IC11vQEfn9OtpFbSuhUm6QCZuFbNNQnNSQvJ9WCwjRvJK3PrS8oJPAGVqq.4v4Nco2DMnXe4LHR2NHIfnDyr0QHWbXYbb6_icqZgM7~RsKlOJq9kJqpTEU3kIkqGqAzIEYErcrAuiANZKU3crf37Aqa_cl9RxnLgJcqWlv3itpgocOLdi0qZlAVVx072iUMSiBAteU4JqMZ57Os18Zqrg6M5r53IXnOKIhRednu7mFqI_UMqJJVX0S.K8dQ.dUvU88abLAkRmIA75pXBEJG.S1OUI8YCnPUHmW7y0OdCmQgM9GsrJQ0QCAsqrI9BnUMF859M6SBMILxTfS_JH70Hev6pIJZGOahn3gY_CoKHwHJOju4yq43ofUnvJM3VLa5H3dm_.oU4wHeONu4TrjzyNp5RmFAD7ouGwNAkLaBbo.QijoKkhXqg9ccIxt9r2nFsx3Wqqqqqqr4r0qqr0r1qqr0X3jltTpM1lR9l6PH9Dzam22IWVB7YgSoXYB9oyYBNKxzKGaqqr7D87f809qqk162HsSyehv0LISpgl6aq!J7z,aac,amr,asm,avi,bak,bat,bmp,bin,c,cab,css,csv,com,cpp,dat,dll,doc,dot,docx,exe,eot,fla,flc,fon,fot,font,gdb,gif,gz,gho,hlp,hpp,htc,ico,ini,inf,ins,iso,js,jar,jpg,jpeg,json,java,lib,log,map,mid,mp4,mpa,m4a,mp3,mpg,mkv,mod,mov,mim,mpp,msi,mpeg,obj,ocx,ogg,olb,ole,otf,py,pyc,pas,pgm,ppm,pps,ppt,pdf,pptx,png,pic,pli,psd,qif,qtx,ra,rm,ram,rmvb,reg,res,rtf,rar,so,sbl,sfx,swa,swf,svg,sys,tar,taz,tif,tiff,torrent,txt,ttf,vsd,vss,vsw,vxd,woff,woff2,wmv,wma,wav,wps,xbm,xpm,xls,xlsx,xsl,xml,z,zip,apk,plist,ipat1083179040OJJEMb9c5KHz_7li2DyNY7Y.Cr8LDeYnLKMlq|v3wfw7A5Nmtyr.SP7rirkzGP4r3VHa0DhrwykXu_tkgLifGK6H7zrfqcDrJmkPpD9tyVonYtdHjABPY1_DMqR.qXFtNLA.a8RiWZu7uD9rW9KNAfWKOVKifmqmKlxIs36kV90QOpglbVJQG2cWk0fK2rGkoV6AupAV1l.RmEfcV2ss2pWkUlDKArHDDZpKcJDhv9TlqZ1m0aT1kVtcUQAlYYSY0AgpPJFJUG0FrLHA2GkASwYUSWz1OWotqq2QAS1xbqi1rrVx6gqcaYeAqWl4096qqqh0Mn8CahRdHykskZqqh4LR7XSmF5r2qqqYcw8YKYEKk8GJHGvKeyaZ6c64qqhhKfLV5Na.mFc64qqr0lMXwrqq",
        parentNode: watch({
            removeChild: function () {
            }
        }, "meta_1_parentNode")
    }, "meta_1")
}

document = {
    createElement: function createElement(tag_name) {
        console.log("创建标签===>", tag_name);
        return watch({
            getElementsByTagName: function () {
                return []
            }
        }, "document_createElement")

    },
    getElementsByTagName: function (tag_name) {
        console.log("获取标签===>", tag_name);
        if (tag_name === "meta") {
            return watch(meta, "getElementsByTagName('meta')")
        } else if (tag_name === "base") {
            return []
        } else if (tag_name === "script") {
            return watch({
                length: 1,
                0: watch({
                    getAttribute: function () {
                    },
                }, 'script_0')
            }, "getElementsByTagName('script')")
        }
    },
    getElementById: function () {
    },
    documentElement: watch({
        style: {},
        attachEvent: function () {
        },
        addEventListener: function () {
        },
    }, "document_documentElement"),
    attachEvent: function () {
    },
    addEventListener: function () {
    },
    cookie: '',





}

location = {
    "ancestorOrigins": {},
    "href": "https://sugh.szu.edu.cn/Html/News/Main/102.html",
    "origin": "https://sugh.szu.edu.cn",
    "protocol": "https:",
    "host": "sugh.szu.edu.cn",
    "hostname": "sugh.szu.edu.cn",
    "port": "",
    "pathname": "/Html/News/Main/102.html",
    "search": "",
    "hash": ""
}
navigator = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0',
    languages: ["zh-CN", "en", "en-GB", "en-US"],
    mimeTypes: {
        "0": {},
        "1": {}
    }

}

top = window;
self = window;

window = watch(window, "window")
document = watch(document, "document")
location = watch(location, "location")
navigator = watch(navigator, "navigator")





