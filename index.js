import TransportU2F from "@ledgerhq/hw-transport-u2f";

import Eos from './eosledjer'

const bip44Path = "44'/194'/0'/0/0"

TransportU2F.create()
.then((transport) => {
  const eos = new Eos(transport)
  eos.getPublicKey(bip44Path, false).then(o => {
    console.log(o.wif)
    eos.getPublicKey(bip44Path, true).then(o => {
      console.log(o.wif)
    })
  })
  
  
})


