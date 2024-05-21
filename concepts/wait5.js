const wait5 = async () => {
    await new Promise(_ => setTimeout(_, 5000))
    console.log('wait 5 seconds')
}

wait5()
