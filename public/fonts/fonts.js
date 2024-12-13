const { Roboto } = require("next/font/google");

export const roboto = Roboto(Roboto({ subsets: ['latin'], weight: [400, 600, 800] }))