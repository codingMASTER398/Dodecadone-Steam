// Dodecadone
// coding398
const mod = {
  shapes: {
    0: {
      shape: "triangle",
      color: "yellow",
      radius: 50
    },
    1: {
      shape: "square",
      color: "rgb(100,100,255)",
      radius: 55
    },
    2: {
      shape: "pentagon",
      color: "purple",
      radius: 60
    },
    3: {
      shape: "hexagon",
      color: "orange",
      radius: 70
    },
    4: {
      shape: "septagon",
      color: "cyan",
      radius: 80
    },
    5: {
      shape: "octagon",
      color: "#7e5ad1",
      radius: 90
    },
    6: {
      shape: "enneagon",
      color: "#a13b05",
      radius: 100
    },
    7: {
      shape: "decagon",
      color: "#526eff",
      radius: 110
    },
    8: {
      shape: "hendecagon",
      color: "#e69191",
      radius: 120
    },
    9: {
      shape: "dodecagon",
      color: "#dadbd3",
      radius: 130
    }
  },
  traits: [
    {
      name: "smile",
      david: "Here we see the simplest trait, happy as ever.",
      localisations: {
        english: "smile",
        silly: "normie"
      },
      isTrash: false,
      face: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAAXNSR0IArs4c6QAAAv5JREFUeF7tmzFy2zAQRT88ql3kMBl3ci6RyQ3SpXdlJjdw6xtkfIQUVspcJifwmB5QI4umKHIX4AIQ+NUKWCzePi0oinLgiwQMCDiDmAxJAqBYlMCEAMUywcqgFIsOmBCgWCZYGZRi0QETAhTLBCuDUiw6sHUOTdvi9ojC7YC2AfA3FM+axdoC8PB6QLEDNg3wEgw0tBCZ5t17Bl6CdjwBz+dnSG5rFasDOgEsGGhIETLN8R+snWBt/8FTf9DWKJYpUEGhShnyPOjWH/M6tjEv3xdt0msU6xkOtw4ObXvmANhTDAKqLUDG8ec3f3o2qj1RT8gIYqmlJ23qXcD6K4+a+bTdD3oyGmoO6glLVTdXHAe89ykB15r5yJTaF0rNQT0hlxALrmsKdME8rUN1lwSCjhV0SbBGsaYvWo/lDAJqbcOC8QVfYrqezm+FQugCoF2kIKDCHEoZZnbbZY0dyxfVDGgpxijyON4o/niLgXfeFRB7Qzdbh5emPdx530P1x18U0LBc6pu11o5VXyUL2xHFKqwgtaRDsWqpZGH7oFiFFaSWdChWLZUsbB8Uq7CC1JIOxaqlkoXtg2IVVpBa0qFYtVSysH1QrPiC+Dv1/ieiw2sNjzXPUqNYs4gmBwyl6g/OLdgDgB+9hH4D+Ba3XflsiiVnNTby5NmuwcODGeT6dA38/wPg80jCTwC+xm1ZNptiyTidGyV8aPCqAV6D/kalSG8D4BeAu5k5SWqeZBEFnEsbKhTL5vrrCrh/nf4b2xjPJDVPssil2aLId+65rpFQ3WEZe0QGrPueSpKaJ1lEUahLHBpT5NT7fQTwPcWiFGs5ytpjcbCy4D9Dcbn+A3ATF0I+m2LJWc2NLKZzjSgae/TO7f3kfYqlRjY5Ialcgh6XXKgDHYq1rFjDaElF6y2eTSiKZSvUvGCCdqNIMbtIw1zZsRTVW2CoroPNy1ecUOxYC1jCEOcJsGPRDhMCFMsEK4NSLDpgQoBimWBlUIpFB0wIUCwTrAxKseiACYE31rZpM1s/5DkAAAAASUVORK5CYII=",
      onSpawn: (shape)=>{

      },
      onUpdate: (shape)=>{

      },
      useDefaultMerge: true,
      preMerge: (shape, other)=>{
        return true;
      },
      onTouch: (shape, other)=>{
      
      },
      contributesToCombo: true,
      isDeadTrait: false,
      defaultMergeOverride: (shape, other)=>{}
    },
    {
      name: "trash",
      david: "f*** this",
      localisations: {
        english: "trash",
        silly: "coriander"
      },
      isTrash: true
    },
    {
      name: "dead",
      david: "Here we see a corpse",
      localisations: {
        english: "dead",
        silly: "alive"
      },
      face: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAAXNSR0IArs4c6QAABJpJREFUeF7tmz+oHUUUxr9PRdReRSGIiKWlYKWxV1CMJEYbU5hCDRhBIygmKGgCRohaaCEW/kVFQXujpa2liIhgiFr7D3mfnJvZOPdm9+3MuztzN8w53dudnXPud373nJnZ+wg3V6CAAiwwp0/pCsDBcgiKKOBgFZHVJ20WLEmvALiW5EMXAwaSbiT548UQq8XYJFiSngBwMiTpawD7Sf4y56RJ+hDADQCeIXl6zrG2DNbLAJ6OkvNDgOvbsYRJug7AmwDOkDw4Nn6K+5L2AjCwOjsVAPtju/klvQ3gV5JHpogjZ44mK5YJJOlxAJYg+8uK918Brs+GBJR0F4C3ABhcZgdJ2t9FTdJTAF4CcEnk6OcA13urziVdBuBjAPeEe0dIHi8a5MrkzYIV4LoXwPsAroh0OUTytZ5kHQXw/Mr1YyTtenGTdHOA677O2eLrAHwaAPs+fKarAXwC4PbwhbHLJ0k+WTzIyEHTYIVE3ArgAwA3dbpsAScuJRetUtL1ofVZtersTKhWX9RMVojnwQDYrsj3lsEF4PMA1S3RvedIvlg7zubBiuCxynVHlABrMR8FqLrWZ7e/DFBtbLEv6aoA16EVYP4BcHl07TGSb9SGyvw5WJHqkt4FYBVhyKq1vhQYJO0OgN3WM/5hku+kzFNijIO1oqqk1wE8unL5dwAHSFZvfWNJl7QfwAULeACDi/uxOae472AtV6y7e1qfjfgbwAMkB3eMUyQjdw5J9gWwL0JnfwK4cmWepcV9ro+djnewgnKSlnd957Zc/wKwrXtnvTvGnYq/znOSngXwQjTHdwD2ALDNiB1N7Ip2hYvFPckT6/jMebZ5sLbZ9T0C4OzqjhHA8U0cOMZJDa+jDkfXvjGoSP5m1wYW9/tI2makijUNlqS+1mfrKDv4tCOF7rgh3jEeJvlqlewMOJFkRyH29sDMjhjuJ2nVdcmixf1PJPfVjLlZsC5ofedUP0ryWF8Cwo7xbO2DxiEYJBlY15A8MAbMJl5gtwyWtTp752dmZ1JWpeyMym0CBZoFK7Q5A8sOP8+3vgk09Sn8gNQZKKVA0xWrlKg+r7/ScQYKKeAVq5CwrU/rYLVOQKHP72AVErb1aR2s1gko9PkdrELChnOyrwDYb6aWLPykONfzaZJ35j60qfEO1sTKS+qFaWI3s4fMwZog4+MwDdWoHdau5ZhnCZmDtSZYkoyO8rZgcBhEkrPK5ayCKZ+d6TyMV6npfGXMNJvq5WBlZK0ber5KTdLJdhDAyCNzqF4OVkZeZ1ql+j7BxiuXgzUC1gImYfe6/yj3f3GrU+Y2XbUcrG3AqrYwz6iaqUMdrFSlKo9bq+0tF6W121JyLJFfB6syMKnu1qxWa8M0FGciZMX8p+rnrXBAKW1JveuqkSVSrUph4A+FUiuG7SBzsIbAWuQta6FdvUr0VK/qMQzB5WANg5X8zm8OFSK1RdUa52CN7ApHatZsKkQtYFL9OFgp51jLP31xmBLocrASRPIh+Qo4WPma+RMJCjhYCSL5kHwFHKx8zfyJBAUcrASRfEi+Ag5Wvmb+RIICDlaCSD4kX4H/AGikXUI7/+UPAAAAAElFTkSuQmCC",
      canBeNaturallySpawned: false,
      preMerge: ()=>{
        return false;
      },
      onSpawn: (shape)=>{
        shape.index = -1
        shape.dead = true,
        shape.color = "rgb(100,100,100)"
      }
    },
    {
      name: "bouncy",
      david: "Here we see a- boi, oi, oing.",
      localisations: {
        english: "bouncy",
        silly: "BOI OI OING"
      },
      face: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAAXNSR0IArs4c6QAAA7ZJREFUeF7tmwuS2yAMhsW299r0ZNmebNNjdfqgIz9iHAOWZAS10c5kdscBIX59CFCyDuzHFFBQwCnYNJOmABhYBoGKAgaWiqxm1MAyBlQUMLBUZDWjBpYxoKKAgaUiqxk1sIyBd+fgw3u4LVK4B4D/AIAfUnl6BusdAFC8QFB4TM/EgkoD0ajfHeeLEPi4A6jPd4lvvYI1CBoXbJBZLKgkCI364MLChTQUMxNg4du48NgLrUewnoKmAjoJLRK0ESSSYT/BwW0kKoLW8gjh+8YdoEewPnEVOjet0vRSFQnKDUDD9pGZJ3MXmxN2h4ZClBrazwt0kTEm6PDsyvpMOuxshKPqbB3YHUpFt6GdaaVOgg6pK5m2rqxP5li1iQ5bB3aHhkCUGvop6GatbhfvlfUZjgQEUUVHgisLl9JMVVBCoO4O4ObjQcUg4kt0xSeMHTaZLjGprXBGw4suMT2CtRH0Ke1aY5GgmeBmShzRXjVKHmpllx7BAniDO/xN1bGGIJcO6jZLzke8fA1JtA0JMtdYKF6XGF4r769lmuzCuzpYixijaKEY68r7qMQD/AAVuyCYCeZY3sgDlGOhBly58XN1vyQ/VwcrdfMpvc0xznMixFrClbs9Glg724MGaNwz1d4OVnp73hsP39/7lMLAIqhYOntz6kQE92SFSqrhRLvcHHo/Yw1fAaHoWxKsTbYSbYCT10Hf2lkrJhwpu5cUkxK8Vm32Ujr6VVILaq2Mq0fts1YMLJJOpEbc2f/H7QPAVjmEtAoZ8yKlSIa9sGnNmLFKDK2cFOp4ym4LWNk9MFf1PvfnlzXpPyUhQqf98ztOG3YcOPC0U1988FPE7BROCoPbslvBrTBCZsuZEcc2sIhCZZqFGs5AlQErvlOeImancPJ47NUszPq9grS5FR4pNwTec26FOOTbdNvF3+jjLzUlXgwbWMeUTvFyuOqeMEytY4Vxxb/x9aUmXAbWMbByvccsVihVBbVSjsdzfGe4vgLAT44BaVsDS6rcfj961qLBR81WMc9msHBL/L3v+vEWBtZxDXMWSlXgOWerFFj4HMH6ozvl0bqBpa9yBq6dVDW+fRSqeYapi4aKAgaWiqwbo9LMVQqqOrMMRjGw6klOP3ONPh05U9WbVWIkA6t+CBAw/H759O/tKwdq/peO6swNLFV5+zVuYPUbe9WZG1iq8vZr3MDqN/aqMzewVOXt17iB1W/sVWduYKnK269xA6vf2KvO3MBSlbdf4wZWv7FXnbmBpSpvv8b/AZntsDOJt4wBAAAAAElFTkSuQmCC",
      onSpawn: (shape)=>{
        shape.bounciness = 1
      }
    },
    {
      name: "frictionless",
      david: "This one slipped in a tub of butter",
      localisations: {
        english: "frictionless",
        silly: "butter"
      },
      face: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAAXNSR0IArs4c6QAABDNJREFUeF7tnFly2zAMhsG291J6sqYXa9RjZfqgDqiNlLgAFDeH8DRpEkMU8OMDuNhjBfIQBQoooAqMKUOKAiBgCQRFFBCwisgqgwpYwkARBQSsIrLKoAKWMFBEAQGriKwyqIAlDExKwfuywBvCsGg91AywvAPA31R5RgZrAgAU780Qb97+lixoaiIaXfcL4z2BunmB+vxO8W1UsLSgAcGSBU1JQqNrsLCwkGIPLDx2oY0I1gRKzbCsTT/wSBI0NmhHz3+Agrd17nP0rPNPCN9Prt8jgvWB059SuJ7Ab4tT162a2YJyE9DQ3llZJmLGz2xO2Bc0FCLXrTVP2yrVPaZ+/viW676djaMW0P8ULChGsGnxX/rLDdZ13u5xOlmR2ZVcWxegyAdsxvaoMxoyumMGHB2WzQn7gogLRnt1toUeQIsurozyza1PNIMVDfSSgHC/LtZYhKTpUFoCZgkamBWTBCUkqheTyK5wr6klKVe5K5IK1i5uktMPM2MJesh33xy18O1haOzLix275AaLejZyVaB2Eg9BPR1rhHOsPQfnQbF9xNDlyfsECubgzuteXLkhj5WvffK+ijrayXtMI9/z0U1arWRO+PrTtrENBVO7c6UKO/p1rvMJi6VaYJltd44dIzVe3I8OTSx+o1tZmWwKlgVYLAIBjKBQfRPfBq0LsHY5wrvIsyBkiqwP0PWOoY3ZLT+1p0KOs1fb1r62T20bDyg7/VtueknWpABm4iGYdK+6gMXS4sxHL2Bx1169+V031XXultSpdtd6TRAlqD0G6WB5QaNqH9S9V7BQqlgLNuXsOY68aS83GuG1Q50SUiH3nJBLoMp+a8smsHGSQgq4QF5WDfVbb1jFUMCVR0MGCvlQmcwL2fCRy3kutgP3n7LWAwzf1HVilSfKfKOgZ9+29x3j/6jfP8fwawHHT61Zur4SWNS5v97aawWLM2XnwyY8kplX/Bm/vnvgivnPAqr3xTslATdBIkWXJBDFkY5tdsB2uH4AwOfmr7NQcy0tXqljXfPH7WD1Oll/pGGesbD+EF17zMXjAYiOljQTwMLqcvXJ0tm/Ali7rNTtsi8NWQQtWUHMsd16hNcL2XjINhAz6JLm3Aq9+vKqgJ1xx3d4dsyrfda4vyJYzLWYNwtZhS5QSRokLkPmrm3b/RSJcwSwjKlSf4rK9ntqSvJWdgJwt45Mi+SwKgLSNY6RwCKuxRw17c5+lQQBwNOpvclueESw/FMlrfRzL/6fgbNn0H/MWasALF0ErFMOO8EMyMimZMPVKaZ5k87kqzIB667M02OLhGWTa4Xi/RScl9jFClh0DJ5NWfT7UC2bTHFU5wQsqlK+KTN2PWE+0x94E3spmPg+qJg7tZ4XsJ4rzetkftC67kBcmQQsrmJiT1JAwCLJJEZcBQQsrmJiT1JAwCLJJEZcBf4Db/noM0IpzNoAAAAASUVORK5CYII=",
      onSpawn: (shape)=>{
        shape.friction = 0
      }
    },
    {
      name: "rotation locked",
      david: "This one protests gravity.",
      localisations: {
        english: "rotation locked",
        silly: "protester"
      },
      face: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAAXNSR0IArs4c6QAABQBJREFUeF7tnAty3CAMhkWae+32ZN2eLOmxOk3jDuZhHhLYgBzqVaaddTZYiF/fCoHtVSA/ogCDAorBppgUBUDAEghYFBCwWGQVowKWMMCigIDFIqsYFbCEARYFBCwWWatGbwDwXm21NbgDwK8D7b+8qYB1bggSoJz8CwAoULCAPiJ+uGJ1UwoeC8BdLWD7V+8Ay6MHZi5nzw1XU2+vN4APLZ7OBgBKASyLziJdglZcybjRAXBvhseIHY6s9cOOl3Jba/GzRd5nBWsVNMwXiXjNgiJByKY9vN8YKwKykfFC/drI9x40AT3S0Rawv+KcG8Ca6qO+VxmtGnZKaBI0G1BlfqsLEE+XAMsYvwDeQMHdyIBgvL2ls/j3up9xi2cE601Pf+vMFwi61Rde5iZBkwD4rJCFzky9JUg8+UTYj8Y6bW+Hz5MpnxGskKdN7LTY0dAtLoe1xXC1YAq4oJLKEiVlvLRyHJC11AL6n14yaC8jF7PK7zAnh09ok3iqs2wmsKswk7pAi4wsyXr0qW0p7IUj+iAEIe/xTQekzLzJqC5wh/s6fMJUiLQ5g2esILEEC/8efaidg6M2KUD3gomqpADe9BaDT1X0krSpJDg6yLZQznXWWmM5jsxHF1W1SdBgqFhGaIXBu5h42hO/Gyh4RzfO7ErG9NW2WOhxbC5c9nsTZwAVzII2avalFQLnCZaxWvVmyVoAIPtY+7nZ1dII6lfycR54AXh8Nm4MZhkrLt5bwSKLQLsy2DVoopGG1mwUOxlMJuvaKO4YaM9YpjhX72c9FCz3tXZX6+po5M77yIylBUMuB/lNqCkEDZ14ZrCYg4EuMzv1tjY7V2zMA/c5+ox+nrGP0RmL2iLohJUnNFM6xTPU063ygRUPZcoYTunU6QjwdChg8ej69FaxfazeDzIHrCyB6h0oi1MXMcoAAceCgEdtAYtH12zfKdh77emRAdYed+hzBayxuhbuLMY6CjdmqePCvRETF/ECFjdY9MXdcs/Hz5sqllM5MzbGp1kLNFSf2L032hM6HxF+6k1QfYU4yoFF2qaK5VTOnIbCuI781UZrkpwKcSRoULa/uPvGDGcFtNJY6t9fLNP6Vfv2Z9zQ6wn3rL6u2E8a5/011u6pbg98q7QhWOmx/v3bmXBJxhqL+3ovc0JX/laa50p5iHzeMDOLxdK9p1/1/1cA+D12yLg1AWusylWwEhwo/YnM11xjObD0lPgxdsgC1hl65qW2YSEgYj30QLk7ywngylXV/u0G158G6+8ZQkjGGqqyu60lmw/TVON/twfU5Hhk0qzFMrM1dOiJsZoznH1f0DbydKIZZZq3fNqyKUm3We83RFaX5r3kwVek4VSxnMqZC5BWejLHP3Zmp0JqmkNmxYX+xpCt9VSxnMqZi4Nls05UY1HX/tL36apdwLoANvUhBEBkLJB1VjBR2h6iuxh21EbxgqDuJn8LyVhjNS5tkK5a++eLt6or9CA+P63MIl9DTgWssWGcz1q0j4XMX2j2Iea58EOPAosUY9MoIhlrbCjIS8YBBEc0z4Cii625vrP/yCDHhuCa1kzGqpZXtcFbAyhFJFpTxXIqZ2py/wd/x+5zR92O8OgG0e+VTSORgDU2FNVLMIWprPQ9Wm61SH3PltuEHTuaDmsCVod4yKl5kX00G+FzaTHrBRPn2NF0WBOwOsSTU2kFBCyhg0UBAYtFVjH6DxM+WkKzIoYHAAAAAElFTkSuQmCC",
      onSpawn: (shape)=>{
        shape.rotationLock = true
      }
    },
    {
      name: "heavy",
      david: "Here we have Henry's mother",
      localisations: {
        english: "heavy",
        silly: "fat"
      },
      face: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAAXNSR0IArs4c6QAAA+pJREFUeF7tnO2R3CAMhuWbFJBS0sElHaSibDJpKB3ko4KUkgIytxm89sUfGF4BEsboZu7PnUDi1YPAmN2B7McUEFBgEOjTumxHgRsRvZ9+t1H/ICL3+yVlOL2CJSZoShIqtHHj/8zw62xZgPUGlrigjGTVMH2eqlCqb1fdfiKNewFrLagb9R2R59UGFpTVq64xd1IdRQdVrx7AUhVUlxXYW26l2jqKTrSrgxUQlF+2pk0utBTAKdcwHOjOrNBIVEF2rg4WvOAtMYsg15pmU8VejyppWq1xCy6JrYmEzKTZptQSuPUJ7TE4gQrbwpOLFceDzEN+rgxWVNCMWduIbk83ohfOsQKLrenIwnsM0YhA3PGSVLWaA2mlan0/OPwEBIWmnTtA/eDr7KpgZQgKaP44kfYKCrXWM4pWbTSUAGZehq4KVjFBA8I3oN1w9x/YQdWIw9zOtgFx0PGt7AqBFUxAC9qxdfCPmK9DC+KkkLUXdNRGfqamBCvYhg3WGMskE6iWLYV5CdzJ3MKkTAOLJ5SBxdMrat0CWNUeYloQJ5phj0E1QVOCFWxT7djlqmBVE1QQktSuJZdDO3lPzYr3OTrwKqOYn3IdSU0ye1eI5Ah8AnJdtXLqvhy2RNUKrnZXXQpnUdUFRSCuYFPwPtY4Be0+VuZV3C0DUUErQIO6LLUkQhX76hXLia4qKJrlSnZqV7R7AIveED3/fbw4Tv1puVL5xryfbJ5N5uJPUJVaOuoCrMWAD6vXwRsftqCp5FZqJ/YxuN7AmvMnJmglQE7ntlewTpeIzIB8EyXrk8yZ8RzfWc7t2NqLKhCquD7H6ntEq1iPNOTM+KWGEudmR/FxyVWFq3ew0Mfvo6TM+pUGCqpIjLcFM4Rq+VZzxJ1eCvbc0+jfRPRt8+UYCbkleiK6vey/5eUPEb0tMe5AUF+J6FMJH7E+egbrUWWS0BhbhjbHvopTDJxYUo/+PxD9uhO5CSX+0ytYpU7jlwmqDg5Ii0rOVZyAA9Y0k74IqDkWri+VnKs44Y5cwb70Ztsbcvoqi7XErHahqeRcxYkCKFwX2WBxk8q19+KwiTqhT7UP2hpYXCRL2SdQkfOkMYWt9u6zV7DAPVZS9kuhJ9GPWr7VHEmolNGnxFNhRjgqTe3kXUVm7reQlgiqXgFUhcpJ1WvFcmPnnrwDaOWQk9PWG5rdbgAyJmUiAJdUqKF+RyirgrSNrueKtdTC7bk+EtG7wgdSkpSdCiQDK5zqM1ewU4NkYGE1BLq2gnUFW23fNTYFkoEF53llWAK0S4ETk9H2WDGF/P9HrsU0XXHSZPnfysDKVdDaHz7vmDSmQHEF/gFGMMsz39UJDQAAAABJRU5ErkJggg==",
      onSpawn: (shape)=>{
        shape.mass *= 3
        shape.friction = 10
        shape.bounciness = 0
      }
    },
    {
      name: "sticky",
      david: "This one is afraid of heights, and so clings on for dear life",
      localisations: {
        english: "sticky",
        silly: "eeew gooey"
      },
      face: "data:image/png;base64,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",
      onSpawn: (shape)=>{
        shape.friction = Number.POSITIVE_INFINITY
        shape.drag = 10
      }
    },
    {
      name: "unlovable",
      david: "This shape is very ugly.",
      localisations: {
        english: "unlovable",
        silly: "ugly af"
      },
      face: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAAXNSR0IArs4c6QAABGdJREFUeF7tnL+O1DAQhz8fBzwElFQIcTRQAXsdDbS8BrwBR8MD8BgU9BSI4xAVHQVIiJKrqRELQd44f9dOnMR2suwsilgWezz+zZex4zhRyEcUiKCAimBTTIoCCFgCQRQFBKwosopRAUsYiKKAgBVFVjEqYAkDURQQsKLIKkYFLGEgigICVhRZxaiAJQxEUUDAiiLrzhldAac1r4+B91N6IWBNUW9T93ClWJ9mm+9azmxyUCa75G+gAVQBQ96XaXdlBKwqCKXIGzygDxBT3pRuBnMJuvpkIcOQlcRJfZhU2f/E2ImSLpFdgEULSiC1OvtzCKt1c/ircq5krEAhyM0MAaWdDdqOLOGE7eqPUzilIMt6s3Wv8EsQoNfJRAUGBMIy/FU/9Q2hibrTdaI4/Q/mu4BlmWOV0/BhCAQLyrBmnaX7smo14FWnVDAeghkKJMYSzOQBqZ/U5rt1ml55vFQtVwrMVWtx4WquX5tqBz0xlirG3IBlNrA6nAoalDidP1zBur5WVTQTxXcByx7F5jCylarKH6IEJQ5Yaa0KWGn13pvWBKy9CXXajgpYafXem9YErL0JddqOClhp9d6b1gSskaHO4DbwALgHHAFrBVdHmktSLYN3xle9JUYf+t+f9V2c0A4IWJ6KZnAduG+Ox8CFVtXzHQDrA3C35fdP4I6C755SeBUTsBwyeYD0B3gL6GC9UfDJS/EZC2X5gvtN8i1B+nioN5QBv4BvwDnwSMF6qpsClkXBDH4AV1o3PjRIr4AzfSj4YqrWNQw+pEwNcFf9DA6Ap8AL4LIpe6Lg+dR2BSw3WMDBGfxtg1SvUei3RKC0bxqc4m/t428bMBlcA14DNwB9Ah3VTpxRjAlYo2QrK/Xcl7Ya99p10Gk4/8+u20n1uOrv+tBzQidc2tMMToBnwFeVzylHfwSs0dINrlhuZVZkzcswy04Ku/WqYK2KD2AFXMV8ymo+g4vAR+CSgluDe1irIGBNUc+v7laGst7TNinDOc7250Y3YHqvhv6TD42TJ+Y+3RawfFQaV2Z7yPMY3xrbdTrbtRpzxbP4XYOl51DRPwJWPImnT+g37OQAmb3oTu4MZj7D4nS/PDQTsDxEGlFkBerUvqBdZpqxe7msO0JbPo61PaKr7tlgMGNiqFTA5Jn2jGmTLEIFfYUyTy8XOai5+DFr0pi18f8UxOaDrNVUKBRQpWzFPT7H2Ba8vSHxErCGqOVX1jxtnz+gt/mYaZJf9UGl2k9vt+dgs8V3toYHybc7hfPhydyUq42HsbNHc95Vz2kzvUtCwAoLbe3dIA3DKXTeHhEVqGxzCZGi/eQdDhu6ZVurBbecXD0BXiZw232r6JBj1tNeSzTU/+QkD3Vwx8q71ohS6mzNXHopLKWWSRtL2bGZ2nKttqfUueZDY3U+pQ9pKZ4p2KmbtWWtpEF1vDknqQ9JG0sd4Zna83nhWWzXmlen4RZlvf0WsLylkoJDFBCwhqglZb0VELC8pZKCQxT4B+oX4DNiDfA2AAAAAElFTkSuQmCC",
      onUpdate: (shape)=>{
        shapeG.forEach((s)=>{
          if(s.trait == "unstable") return;
          s.attractTo(shape, -1 * s.index)
        })
      }
    },
    {
      name: "cool",
      david: "Ah, a youngin attracting all the little ones",
      localisations: {
        english: "cool",
        silly: "attractive"
      },
      face: "data:image/png;base64,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",
      onSpawn: (shape)=>{
        shapeG.attractTo(shape, 1000)
      }
    },
    {
      name: "void",
      david: "This one is racist",
      localisations: {
        english: "void",
        silly: "racist"
      },
      face: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAAXNSR0IArs4c6QAABT5JREFUeF7tnH164iAQxgfbPVfdQ+x1qu519hC6x9qnrbMPhES+wgxEgyXjP60GCLz8eBkgqkBeosADFFAPKFOKFAVAwBIIHqKAgPUQWaXQzYGFiG8AcASAvel+BHB8+6KvKaX+bgGNSQuE/U2DSZDLJ8DxR6UWmwILEc8jUD5PPkYIcNkp9bNnuPCKZ1B2cOUbelEVWmwCLDsytRvlXw5t9t99b+41ajE3sIbPk1eLtNgKWFqp6YWA1vmD5gd66rc7pbrSCBE9LSKvRuWGBt5lVaBFV6Kl7Mid/sKAijIwe71qKmCWvWoyX4vg1rnY4JaUrUXXYLGnQLp7i6YBurj1UyB+vAG82nDAp8h7N/qZssMwBo6lRe9gnQFwn/T20wngqBeH9qX/fz/MTQPskbo+Mrw7Tm5lQEEAZ8rD0wlUqMXh3VsuOytolhadg3W1428cfrYTQqhcuA6HRE8hKLX71lohai3iJkRQRVr4EOrLnFjrW4tFjVUTqKZih1w8nohtewjiU0G7kYalhRXR/hGwEisgvpg+thwxKdBbXg/Bmsabmtlc0JV1B5kzQDla9O9Yqd50R6lWQMcbxtoCMZ28HDFbgkPdewIrdHCWY5UPsg2ChQC/fwMcnMA9iCvG+NYNSboBKzzFysSbaONNDxIdqe3ovb3ewZqOcKJYK7UqdAL3YGCzVkKUa7S8nt3DIrSwVj6uElla9A7WGwBeBkiGpqb3AcndQdbeTUtwqHvf9vRm2jr7sT6l8DBhadE1WFrsK+JZIe6Bdu8EeEZt1gilOvYZrqdcy+WJHF4AbC26B8vCZcJzyrF6jK1CoL3VYYKkHFwlceYmwJo/2iEnRpbtP4Mbceuw4JjL0+KKiLkD+k2ANYqeDWD9nmFbPrdDny3dUi208+UcbFNgDdtUwROkAVDbe4IUjwBqeJrWXdwgXECln6bVbqXBEbCezS6+cX3GGI2Kt7p0LN34Hs73no0/LlS63l2C5cRU5pzGDdHDkUbFCo/qXEQ8AJhpiLqF/nLHiUr06OslUHUPVrzUTj86Qtn6PTsN8esAsJvOkxh7R+PtmwCGVzTPcZdqRA6Xe4q6xbIGZzJfN1v0GgC8HpV6ae5enIYIWByVKtLcC6jEIVQT5yqVQMAqVSxO72qoQ5HYocj5jnF+Fx8LPDVgAtYysKaTIo5DRfgEH9zezpMYXMnBpeu2sws0/Vdn/VjWXH5uAYuvVSqleUIwgophQF5hhKPNHRTrPRU1bGKGcZfbrwp+gYI/8LImXALWMrA0VbepbySAnPq8myZdJ1lunsZ5wI56D93sa7wCwL+FTWZlF7BYMqUTTZ1POVTq+hWO6iW/PzWW72Wf3iRvOjc1mhMYOzV+LmgyO6uAxZYqTjju8TCLqAq2ObHbdP/5x4bHftax1hezvouSCViV8rkdTgTdVUCF1ZoFLDaunGvpYs1pxKNfAlalwrPfWbwdIN0FKLd68+7l01W6S14pQTabgFWhKmMVeHeoxmrGcBXFWhWtrcsiYFXoNj49MSfeGo6R/Dkin7GHwc2RTMDiqBSkyf/GVHJfqeIu+SzpaTFyr2ZwCVgVXZ5zizXcypkWyUB8zfq4UgpYhWBRy/81O5Kqi21aE9cSsMrBurlEYqd9TbDM3sG08z+/3b92nXS9BKxasNL92MQdKOcSsAo7uUXyIb4afh43HJUtOjAfbw30t6iXOFYhnZmpp4lbJfe3/PPEJvUSsArB8uOaKXOTzgur7kFvfmO03aPMAlYFWJKFVkDAojWSFBUKCFgVokkWWoH/xT5VUZwr3ckAAAAASUVORK5CYII=",
      onSpawn: (shape)=>{
        shape.color = "black"
        shape.void = true
      },
      preMerge: (shape, other)=>{
        if(other.void == true) return true
        else return false;
      },
    },
    {
      name: "dizzy",
      david: "This trait goes whoop whoop whoop",
      localisations: {
        english: "dizzy",
        silly: "wuh ruh roh"
      },
      face: "data:image/png;base64,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",
      onSpawn: (shape)=>{
        shape.rotationDrag = 0;
        shape.rotationDir = Math.random() > 0.5 ? 10 : -10;
      },
      onUpdate: (shape)=>{
        shape.rotationSpeed = shape.rotationDir;
      }
    },
    { // Here's where things get a little more complex...
      name: "trash eater",
      david: "This one loves to eat coriander",
      localisations: {
        english: "trash eater",
        silly: "coriander muncher"
      },
      face: "data:image/png;base64,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",
      onUpdate: (shape)=>{
        trash.forEach((trash)=>{
          if(trash.colliding(shape) && frames % 30 == 0){
            trash.remove()

            shape.scale += 0.2
            shape.vel.y -=  1
            sounds.ghulp.play()
          }
        })
      },
      onTouch: (shape, other)=>{
        if(other.trait == "dead" && frames % 45 == 0){ // it's only personality trait );;; I can't
          other.face.remove()
          other.remove()
          shape.scaleLock = true
          shape.scale += 0.2
          shape.vel.y -=  1
          sounds.ghulp.play()
        }
      }
    },
    {
      name: "tiny",
      david: "Here's a little smol one awww",
      localisations: {
        english: "tiny",
        silly: "so smol hehe"
      },
      face: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAAXNSR0IArs4c6QAAAlFJREFUeF7tmsFRwzAQRb9TAAcaApqgBW60ECiBKy1QBKEhZmggZhwnjO3YgGWtVpGfTySgXe3bh6SxXYkLAgYEKoOYhISAEAsJTAgglglWgiIWDpgQQCwTrARFLBwwIYBYJlgJilg4YEIAsUywEhSxcMCEAGKZYCUoYuGACQHEMsFKUMTCARMCiGWCNdugN5J27eyqnVTfWc0UseKS3Up6GoTMhXFHqt4MbyV9xMUgXpuJCDRp4wLm/S6pkWh4NStY9JUrl/+mAE7ZDanHZ9QgrnPgPDG/dl+MTTN6wNgTvJR4lVQf9Dm0r/3h56NB4wK4sGIFQMthSKdxPaV2quNvNQEFj2zVh3lyxgqAmXjIZivtcz28NyxauVrvTc5WJ+BshYnVW0s6xFpLpxPXiViJga8lHWKtpdOJ60SsxMDXkg6x1tLpxHUiVmLgnXTDO+HNbYrnSNN5kfR4jOXSY5ekkeBdepixRywR+nF9JX1+deC8SbpPDStCIamnXEy+M7E69+tnrV4babs/f6uiCyp5n5MnLEaL5YWMvWIzHbVj3czUr5IeZo5Z/OeItRjh4gC9lWvcn/63p0fcler2mffvl0uPXZL+RWJlv5+3co3A6b9U0fvkhhKx3NBPJv7HItQfe1Rp1rnMumzEsiYcFn96FRvfK7OSqikZscIaz6gcD3Z0pXwCrFjl99ilQsRywV5+UsQqv8cuFSKWC/bykyJW+T12qRCxXLCXnxSxyu+xS4WI5YK9/KSIVX6PXSpELBfs5SdFrPJ77FIhYrlgLz/pN8PWPzMsaSXdAAAAAElFTkSuQmCC",
      onSpawn: (shape)=>{
        shape.scale *= 0.5
        shape.face.scale *= 0.5
      }
    },
    {
      name: "huge",
      david: "This trait is a huge waste of space, sort of like you",
      localisations: {
        english: "huge",
        silly: "extremely fat"
      },
      face: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAAXNSR0IArs4c6QAABYFJREFUeF7tnDvS0zAQgFeZ1BScgQNAw9Dl5xIMN6Cjp4rhBNByA4YjUBBKOnruwAkyvxjJUiJHj9Xakiw5SsHwx3rs49OuXjGD/ukWyGABlqHN1po8MGADADwYgp84cPHdr9aUMeQ9MAZCB+B8ohsAsBOM+olPFh1zgnVQgt86TXx9Gp/tB4BzFsUigTgqqJzFFVwfI9uqpdhR2107l4clE/5JruO6YO33A5xXA0tEKgW43/IcuIhka8JPBdYDlnC1E7GmwBLK6VCLGWbYAcBjhlET6pgB+3lNf8Lg3jEm0uJrTIlKnossgQ4Wh6x6GpBsAKWOWDr9zVUumWKYoxkwe/jKQW1DxoGnthMm3tznxmAxmjCDlf7/NE9qfyUbQKkNFgTLG4xHGxRNOU6wPO5sHiyXXhewpFeqB0uMGJFVHphOLZyrzI5gNYbwZCMGG/ILwHKtIn3dlV5dyijsDkpKRN+MfqyULNAka0iJPVEMc+7FAopGKJhyULBc6QNVyF2g4OryigayFPSokoyHZA2ZYM2yP2NifpNaHq8oKFizlFh9dWmBFcwT9sNk9k/WkArBcpxIPNSIQROg9kXiUIxxkQSsaOWkNH848BeYXAufu+NUvJzJeEjWkA+sqaFQDZPKE3JSErCIFBRIiT/F/FaK5UuFbhfUPXkXyUxPl+Sq3foEwKo0YgV3uIhgjf7OuuGKg+WWuW6wAGBcFU7P3QxVXGCJ9aNc0J+A17kqnMFPqErOlDhjg1T6pG+QpnLydOc9Vatx7WROiZcjnThp5AlJM2eFpCMdZYDkyiGGjTorjHQOuVjmlCjkEdFLH6s93GztNHu74QjiykbcXopWvjRYwvjB2w1kWgIVHHO13GeQV7DsCb2YU7V6bWYvj3cYnAd+mXMxkEd0/HJQWsOdJxG5PgPA85Qg6YVZaJnb0FER2TTFlvdkycpXIEUvLo+gJpcBo1Orjl4F0mF5K6oeO1hT0y+9TUqCU1xxaehKDgnSDhbJXHhhBuwvADzDS44ltpoOO1ixBITLHRhjYrFi3puParmDFWWmuyxETX8TI3Ww7pIZROk9HNgZvzcfaqWD1cGyLDB39/66pyUvQW5yOrJJpUqNgagbEsiFjh6xSnmroX6iwArr07cbGvJ3MVGXgtU3SIu5qq2O5s6x1P5VllsFtViwz7GWeeLA5NGOy4zeK4Klf7mzTMOZtTtYMw1nVIvZx7oLmExTbgEsff1DX3DT+pVMNUvPGJfjXVkLzYO1AxgeR6OuCVZlbl1fnNbBGhjA0Xuf8LqHVDJ6pfTqF9XY+5tGvwHA25QdpW6rdbDi7qiOVlvzpirBb0+fjIX//QCAl4GK39WzN4TGixXdEFjobxYHAPnCpDWuQBMcaoMlNbPV62ARrEot6nkV0dQLtmN2KnpVA9leKf4JAD4QjVBlcKhSKIJhKanQeA+L6OECX/EUuVMLjcfJy+nQiOszS5U+rFIoAlj2z8xM/2jtLPxcD2TFnJN85Pd+VLAu5av0YZVCLQLLrNwUWAStp0Wr9GGVQhFNTP3lr+0WYkJ1ykcNOLcD4EYGq7nJF/KPr6qJd0R7FSm+BbBMQ5EQobFghj9/TW+QXOrOaZe/AeDV0iZz1r9PsJSTgmBZZeKQkaXkO+Ryug06WFnNaze+LC3OFNYNqDlm6ZTJNq//GIvYPC/xmKm6t9rWIpZWlPJSklk2paVR92zbuVh1M5hztTpLf6zS/YBljn7LKuE5ExZv3BNtf74NLlY7WBiz1T3PmyZv6dJ/o6HNW6C5KOXa6amOgswC+SGLm6MvEu+mi6YB8hliq6kQc7wEiwGIVyzhEyA06ri6i96S6GBh3mr0uRW93HMmh3bmNMrBUaCd4ueTpX3zH/jMkELzsPasAAAAAElFTkSuQmCC",
      onSpawn: (shape)=>{
        shape.scale *= 2
        shape.face.scale *= 2
      }
    },
    {
      name: "sick",
      david: "Get this one away from me, please",
      localisations: {
        english: "sick",
        silly: "blegh"
      },
      preMerge: ()=>{
        return false;
      },
      onTouch: (shape, other)=>{
        if(shape.colliding(other) > 100 && !other.immune && Math.random() > 0.97){
          other.sick = 500
          other.trait = "sick"
        }
      },
      face: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAAXNSR0IArs4c6QAABPZJREFUeF7tm81u1DAQx/9Oy7fEYSVuPAHnve9yaKM+Da/AK/A0VRGCwrlnHgCBxIdUCQkuiNZokng3H3YyceyEZGelqu2uPbb/88vMxPEqyEsUiKCAimBTTIoCELAEgigKCFhRZBWjApYwEEUBASuKrGJUwFouAxsodblbntZbAO/HWq6AFVbpSZ1ZWYpSurE0rUfz92gDhfWfl7WYTq/azqZHflUAz5kh55bbKoavKOWeS50D+p8sNOFkSn84YNmv4KSmk5+gNtvGMAesMNHFAnd5dZowsfnb8d42AS4JrBsmS9WA6dNpln1cztf6ea32MELfMtfZ7lB/sLg1UWN8c3XUopXNniuw0AVHP8cA/vjAddgRq3JBVwAjUQmstlTQESGoN7NgLkOfpbBSHnPb2CilspBSfVlyoB1ul+/p/QR4lgAfCSzS4hfzIts1OxywgG4QstIoA+xDXiBV0gCrfxYtuEDtvcWyXa+brJFpl4KLFbjn4kqLBVgZUHcA3AVwLWB1KdBWD3X15X7OSX91W9x5rVbAeu2eydUVcH3NiZZHtYhMQJkfkwYNWN+5SzftDilimTVvodQ7rFZQ63WR60rpwzimaN0aFWxq949WhZXjDdTNft/J2O4CyTaHiwuOXwmaciYtg0UpkMCjaPUQwCcBq0MBDahM9TTlFec10JzmvYFqWKymxdPTvj4FeGDdqxh+igSfs4hlohXBZdp86TsJDtl9bf7v7Uk4zQaLVvP6tXtN4YCqj5ED1gKWM5rywKKI9IAGfQLgRz66Kdbp9/0iYn2V4p2HdB7y05S/P1MGyw8k/w3QNK3c+HWm5iTZ4vyc++iG0lwGV/EqF+yUBn8C+MaTtdrqECMWKZAgTTcA3rJE40UAt6khG6BnZxvc3jZrr34AtS2TAHpcpD0Ci/6nvSu6E/zN0sfS6FDBIilMPZFrcHKyQZK8aWgUwoE1sIotiUVrv+jF+V5twft1bSX4pdfg0wxpUMAKqabLVhdYpt+CABOwxgTLduKgPr7P5uoYa+g5hoDVUzCv5tyIRcYXErUELC9SenbqA1YO1+z9MvsF9HTxVM3tD5m1fgGlXjUmJWBN5acFjbuLZpWjMpwLnmB9CYDOWdVfl9CaPuNulAYXlLOA4IOKwYoC1Wh2pLf42wEEPUS3A2UDjI4BWV8KKtsANUhr6EehfCNghVJyHDu8c1vNO83s9KjKTxAaloo/dP14dpCVCFjDZaSHueYRHjmOd2rCZ9y+NwHlMUau2wQsHwfv+xBUJgKUHxZ7f7vFOR1++nOZoLqrLS1W5qwx7M5UwBoGFh0vKZ+NDw9UPj9rCuw86eBIiebtUmo0aTEYD8EMDfPPbHtTxDKpLxZUdDSRW6x3CbmLWgRVPuFhkck1oIDV5Yr2z/NDgwO+2Mkafkht1Yxao/h8lEFY4kkjtwIOsBqpcMCzyCyCqfybZyEimYA1B6BLYPWuqxwRK2Z9RUMKWDMASylTD7UENW4+HmnbQcCaAViQGmsOXprhHCPcFcZWQSJWbIXD2Pd7lNOxjxVmanYrAlZMdUPaHh61WnfeQ05VivfQasa2N6TWGqloNxJIxIoNQ1j7filxguPOAlZYx49jjZ8WR01/5cULWOOgEGOU5gnS/c67nCCNobjYnF4BiVjT+2CRMxCwFunW6RclYE3vg0XOQMBapFunX9Q/aYVhQuRlUq8AAAAASUVORK5CYII=",
      onSpawn: (shape)=>{
        if(!shape.sick) shape.sick = 1000;
        shape.color.setGreen(255)
        shape.color.setRed(shape.color._getRed() - 50)
        shape.color.setBlue(shape.color._getBlue() - 50)
      },
      onUpdate: (shape)=>{
        shape.sick--;
        shape.immune = true

        if(shape.sick <= 0){
          shape.sick = false;

          if(random(1,5) > 3 && shape.canDie){
            shape.trait = "dead"

            sounds.death.volume = 0.3 * Number(localStorage.getItem(`settingSFXVolume`))
            sounds.death.currentTime = 0
            sounds.death.play()
          }else{
            if(shape.trait == "sick"){
              shape.trait = "smile"
            }

            shape.color.setRed(shape.color._getRed() + 50)
            shape.color.setBlue(shape.color._getBlue() + 50)
          }
          return;
        }

        if(random(1,1000) > 998){
          sounds.cough.currentTime = 0
          sounds.cough.playbackRate = random(0.8, 2)
          sounds.cough.volume = random(0.1, 0.3) * Number(localStorage.getItem(`settingSFXVolume`))
          sounds.cough.play()

          shape.vel.x += random(-10,10)
          shape.vel.y += random(-10,10)
        }
      }
    },
    {
      name: "doctor",
      david: "This trait portrays the average healthcare worker",
      localisations: {
        english: "doctor",
        silly: "vaccinator"
      },
      face: "data:image/png;base64,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",
      onSpawn: (shape)=>{
        shape.immune = true
      },
      onTouch: (shape, other)=>{
        other.canDie = false
        other.sick = false
      }
    },
    {
      name: "necromancer",
      localisations: {
        english: "necromancer",
        silly: "my saviour"
      },
      david: "The necromancer uses an ancient technique to bring back the dead...",
      face: "data:image/png;base64,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",
      onSpawn: (shape)=>{
        shape.immune = true
      },
      onTouch: (shape, other)=>{
        if(other.dead == true && shape.colliding(other) > 160){
          other.dead = false
          other.color = "#969696"
          other.trait = "smile"
          other.index = other.originalIndex
          sounds.fweng.volume = 0.25 * Number(localStorage.getItem(`settingSFXVolume`));
          sounds.fweng.playbackRate = 0.5;
          sounds.fweng.play()
        }
      }
    },
    {
      name: "mad",
      david: "This brat is angry at nothing",
      localisations: {
        english: "mad",
        silly: "grrrr"
      },
      face: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAAXNSR0IArs4c6QAABIRJREFUeF7tnQuS2yAMhkWbeyU92aYny/ZYnU3HHTn4hXkIITBZKzOdbmdBEr8+MMhMakA/Z1HgCgCficEaKTHEDEkF1MgOReR1KDcA+NMotlpuBoJhMR7EDBGC7qkJRWRfvO8IWM4kEuNBzFBP1BBiiYCFkkS5K9VslejRV21YqZNINI5SkQg57LIJVewaq5bPd808hMYqCpIrVM0BdUmUDeoKYD4TK9MSv13EVmtZiW5NwTIAg8dhSfykvFZ3QIqi30aB/cnlBvDkbuZbghXaX1XPe3UH/TJDjiz0KOFo1zrRkrGTBcOGHHGyHHyDxpIwtE60z5+7t7oaA/dhgNvyqB+3CfeSEsuZwUJgUDwUevpgAdEn6JKglfqMSUNJNMNssEvqsfthx7s1sIwRtfjNCeisYH0AmDtu3rfFhflfrqDuqsU9UaUSzclhrE8s7t1KPI9+/MGAgQELL6yxnhEs74lwK+qYK5agCTIoZY4afn1hPcDADQF6fV6heXTAVfxXLvFnBOuB0Bg8h6OMeBg3AGbYFR9YgqbBShZgJxO1AfNCHogum5PsDrnkdtce1/dlgvrDs4+C8Xkg+/GvWOts7jNbCTAz4Gwyg33gBXmfxchSQlq4LOcHNbbJtXuI19K1LFn7TZdkmJRHYcifNGDbWFywCnU4J1ih2bnfYEjrUwLWtAUSAd0APOzGPGWPtSWQFi4VZA+/H/dYUyCRHQ9L0PQey9sCw6DcQpBctTb+9jrMm3qWzzOClThmzycjlqAMsHYFy8SFPMmcvcounpOLHYfWsTKXQqcwaOfrMm3ZgjLACoFiJ8BuLZEEC8N9FYqx9DCekseTTahQTJZZOkiy4w4abirv4x5+GK/uFr3KSIwrt9Dq7Ml4J7QjtD4zWEfoneNT8h1ljl+RtgqWiIxVjLR+YS06CAVLVE5RY61fWIsGr2CJyilqrPULa9HgFSxROUWN5W70RZ2XGlOwShXU/sGKr0qjCogroCuWuKReg5TXNb6ONar/TUasYNWVmQuUG9XbAaZglYO11nA6yfmBirzxJobxNoApWMSMBprNVwDs7/dAlcPkuqbmDNv9sLeN8W+E/qtsuPTe1CDpFs/UEu82TzdSX+Ne1Z48RMlBllq51nnFn/HPz5ZwKVgyE4G6l0oBMUVDsUfJ3dRmgusCAH9lhhy3QgmuRRzv7iN1M5QKlKtDCjCq3QksfCQ+W4itYJWpLJX4VBQxcCk5nNogWP9SziR+TwlKws93teG7LzWNVVLbKxj4jHxtF2Xlcg8aVXMiOfiqgXZoPLZaURLNGVLpysXxyeqjYLFkc0+AGyM1NW316OWrYnvWFKE4uI4NhBJca6Vypeh+5VKwePQee7vzAld4Br9auxXcUeUULCZYnlrnEQk9FvCIdgoWE6x1NwvZEVrOj+ROQJ9lOUIMXir76tXTteEu91sKFg/YnsCK3aQ4LL+HOebls5tePd5H7wl2/XLbblAtD0TBKtdQLXgUULAUC3kFLgDX5/a/jTui/KGnQvnUqkW3BKOKqALiCvwHvPABQuDTA3AAAAAASUVORK5CYII=",
      onSpawn: (shape)=>{
        shape.mad = true
      },
      onUpdate: (shape)=>{
        if(Math.random() > 0.99){
          shape.vel.y -= Math.random() * 5
          shape.vel.x += (Math.random() * 20) - 10
        }
      },
      onTouch: (shape, other)=>{
        other.vel.x += (Math.random() - 0.5) * 8
        other.vel.y += (Math.random() - 0.5) * 8
      }
    },
    {
      name: "old",
      david: "This old lady is very fragile",
      localisations: {
        english: "old",
        silly: "fossil"
      },
      face: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAAXNSR0IArs4c6QAAArVJREFUeF7tnDtOw0AQhteCmpMgOxWhzCkQN6Cjp4rhBrTcAHEETkC5FgdJmQYtciQjJ/gxu7Oz3mj+tMzzn89jxywUBh8oIKBAIRATIaGAAViAQEQBgCUiK4ICLDAgogDAEpEVQQEWGBBRAGCJyIqgAAsMiCgAsAiylmW5LYqiPjV1ztVN0zwTQiQ1yaFegDUw8v5gnDGTL/tyg2sMqrbNrpcUNasGa2oIPivGWpuNjlVVtfyQPu7H1c23zMbNRhCSEhGNYkHVlnQuYI1tX4kNphasvyt77l5HgPlcwCK0cjCJARrAoqo9YhdjCMwSjty5mzjWc5hisEp3eCxnbKzcoOoI48LVxeFsYrVghYifK0hzGy+kV+6zo1qwWuHmXiucK0hjoPkCho01d8ni597PYdyLSvXG0s6b5Bt6gKWdLqH+AZaQsNrDAiztBAj1D7CEhNUeFmBpJ0Cof4AlJKz2sABLOwFC/QMsIWG1hwVY2gkQ6h9gMYVdrVa1c27bheH+KoRZTjbuAIsxilOo+qGWBqyqqldjzGOvpndr7T2jXS9XgOUl17Hx3PnyJeBar9dX+/3+0xhzM9Dah7X2jtEy2RVgkaX6bzgHVsrb42azudztdi/OuaepljhHYXykAlg+ap3YUsGSAsz3fFVbB8BiDDyVa8hg27PQzhnWH7oe5aUcre7ZAKxUdDDzhMHFTBru/matfQh3p3viVkjXatLS97ZISju5jSir6uh76pe1zS0pbwQjgBVBxDZE2ObyhSOs2CW+nQKssFkNeoXBFaOAYUCXAKrrBmDFmOtIjOuy3F4M/JcawZSH0EsCBbCkp9uLL73JcgDpVE5srDMGLEegsLESAqUxFTaWxqkn6BlgJRBZYwqApXHqCXoGWAlE1pgCYGmceoKeAVYCkTWmAFgap56g518SLx1CFwiBnwAAAABJRU5ErkJggg==",
      onTouch: (shape, other)=>{
        if(other.mad || other.sick){
          shape.trait = "dead"
          sounds.death.volume = 0.3 * Number(localStorage.getItem(`settingSFXVolume`))
          sounds.death.currentTime = 0
          sounds.death.play()
        }
      }
    },
    {
      name: "david",
      localisations: {
        english: "david",
        silly: "attenborough"
      },
      david: "Hello, me",
      face: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAAXNSR0IArs4c6QAAAuxJREFUeF7tnGtywyAMhKWTNT2Z05MlvVjpYMeOH9iAkQhjbX51Uryg1VdZwTRMeMEBBQdYQROScIAAFiBQcQBgqdgKUYAFBlQcAFgqtkIUYNljoGPi+xi2I+d//pG2AWBJO9qe3gKk0PI04AJY7YEguaIdqBzRakPAkRNlQVRM0pGLaUWrho9XuHIkzTm7JYqyICp2MRgkwslKriBcafP67PviNUAtyoKomEQmLqSRltxAwKVJZuIXLiluOs+WeAMPsFK8zx9zGiqB6pHcVwlWyI1DACsfmtgVHTPfx1tMbHAoI86dvy3tV6tlwy7czwGs7ERnXpB3G9qKlyb8aP5S7RwrULFy3IqPzb4FzusIk7v/FW5WLsHy/RNPGwulvVs8/PcIgJXjVmRsrFpVqhgdEd/Xia009+QQwJID612tZh/jR/nKia3y2ObIOoAlBFZCtTLltalghRgKyrTSNGvGmKMNsHLcOhgbAcucz+YCFuIoJBP8RFi5t1IML08aYOX5FRv98aY5tsBavwdYtZwum+eLiG7kd/Sn1/T02L/3JKLfsilkrwZYsn5qqHVLoHamcDonQc8GBLDOOlflOn4Q020z1fac3jjkSc59V1laZBKA1UIWwmsIVCpH/bGpo6w1UrkAVptgfRGz75vOvZzzVe6jPRfAOpc67avS+qq9VTRQtQCWNiJn9DnnBOh2gv5RZcGZrjNLXl8DsCRclNYYweqb9P1O/XBagCWdlQvo7VasF2QprAGsC4AgHUIIrBSY5usAWNJZuYBeUY81nBlFj3UBDhRCwKdCBVMhSdTvYw0HUffugfP3V2OwjwWGDhzoz65nf+diA3tYPiZsN7TMNvODyO+iJ6cJzwpbzmdja0vrtxqpVKN3yX8KjZltbTn9eSz/H9abL2UYgMJ5LGtEWI0XFctq5pXjBljKBluVB1hWM68cN8BSNtiqPMCymnnluAGWssFW5QGW1cwrxw2wlA22Kg+wrGZeOe5/3Nm7MzjaAB0AAAAASUVORK5CYII=",
      onSpawn: (s)=>{
        s.lastDavid = Date.now()
        s.davided = []
      },
      onTouch: (shape, other)=>{
        if(Date.now() - shape.lastDavid > 10000 && !shape.davided.includes(other.trait)){
          shape.lastDavid = Date.now()
          shape.davided.push(other.trait)

          let n = new Sprite()
          mTexts.push(n)
          n.slow = true
          n.x = shape.x
          n.y = shape.y - (30 + (shape.index * 30))
          n.collider = "n"
          n.text = other.david
          n.strokeWeight = 0
          n.color = "rgba(0,0,0,0)"
          n.far = 0;
          n.textSize = 30;
          n.textColor = "white"
          n.textStroke = "rgba(255,255,255,0.5)"
        }
      }
    },
    {
      name: "police",
      david: "Police keep us safe from the mad shapes",
      localisations: {
        english: "police",
        silly: "opps"
      },
      face: "data:image/png;base64,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",
      onTouch: (shape, other)=>{
        if(other.mad){
          sounds.siren.play()
          sounds.siren.volume = 0.1 * Number(localStorage.getItem(`settingSFXVolume`))
          if(other.face) other.face.remove();
          other.remove()
        }
      }
    },
    {
      name: "mark",
      david: "Mark my beloved",
      localisations: {
        english: "mark",
        silly: "mark my beloved"
      },
      face: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAAXNSR0IArs4c6QAABJhJREFUeF7tnTuMHEUQhr8an8XD+HGAgcgSJMhHQmIkJPM6IrBNQoKIQA4gxciEhCBsYUIEAYKMmIOAAGEBFhJ2YAIsEWGQLAMyNmDwA7guVHc95/Eux/bs7vR5t6ul00i31VVdf/+qqenprhG8OQIdICAd6HSVjgBOrOkjwe3A3cDPwFbgDHAr8CXwTy53nVi5kM5kp6I6oOj+2pzCUvRQdA/wYaZheMTKBXQuOxXV64ru67Wn6EPAZ7nG4RErF9KZ7PRGrCuRS58AFjINwyNWS6DXA08CF4ANwGngcEsdXYvvrajmFd0syG+KbhLkfCC8BnzdtfFav0esdkjvEOSrRpcFZSkSeOtBwInVjhLbBPm+0eWIojvbqShD2onVbp49YiXi5cRKBCqKzVZULwHrgMVA+AF4s52KMqSdWGXMc3YvnVjZIS/DoBOrjHnO7qUTKzvkZRh0YpUxz9m9dGJlh7wMg06sMuY5u5dOrOyQl2HQiVXGPGf30omVHfKJMrhTkFfiDtQzghwOhJdTPHBipaBUrswuQVZ2nQryViA8nwKHEysFpXJl5gX5pHZfkHcCYW8KHE6sFJTKlXlckI8axHo7EJ5LgcOJlYJSuTJOrHLnvjvPZ2B+0W+F3QFcsGZP3gue/C5df1iQTxs51ruB8GyKQc+xUlAqV2a3ICtHxny5YYxEmIFH4rn064E/gM/HqP5aUvVYPNZ2Y/RzI2CHR3YDs8A5RY8Ar6YM2iPWAJQEOQFsj2LHFN2RAuyEyWxf9rM+kL8y+qGPtzmxBhOrLq5hkicVvXPCSJMy3K2CmJ+97QtFH0hR0CvjxBpMrG+AuSh2VNH7hgH6Gu8zJ4j52ds8YnU1cVZkA9gcSwBdDIRvgcvAdcCpnPUQxuzj04DlUZZCbqio5iCsh+qv6NvlQPgOODCMXY9Y7VCbmgOrsVRAnS+eUPSedlD8v7QTqx2aU3PEPpYK2BbdP6voLe2gcGKNEy+PWIloesRKBCqKTWHEWlpi8IjVjgdjl746YgkLqpNZxshzrLFzYySFtvr+TOOpcGNFdRdg/78I3GDXQLCSjO+PZGn4zk9VVA/WY4nXS/WTXuOJz55ubcz2VGh/7w1vsr+n3wpHQ3OPIB80VdiNpUIOBoJVpcneVisV2TuQuB53tKsBOrFGQ9YOG/S9OxTkjUDoKzA7mqm03hXVIUVfGCQd3yCcHCQ37O9OrGGRW+43yRHL1rCOjeb+6r2dWKMha7nVo/bmP+4AOAvcDNwryP2ArQ390rjabyZjuwV+BTYBvwM3AX/GfGgR+LuRt1kRXdtVUctuifZqXVfZUNQ+FHA82jGZc6xjlsUle/YG4Xy09zEQRnPfidUVfqvp3S9I/6uQ5Ur+nbTGhwIstzvYiZEWSj1itQCrheg+QewdY6etb5OLgKq+CBzq1HCCcidWAkhDiPx3xEpW1EeZFj3VI1YyWpMnaLsw7UNJPwJ3NK4/Abc1PpxkuZnlTHXeY+tKVjh3Jq6V2bqY5Ve2C8FyJMvN6o8u2f4p+yBTrw1bn7IPHKxp84i1pvBPr3En1vTO7Zp69i8pyydCDV7ZgQAAAABJRU5ErkJggg==",
      onUpdate: (s)=>{
        if(random(1,1000) > 998){
          s.vel.x += random(-10,10)
          s.vel.y += random(0,10)
        }
      }
    },
    {
      name: "exploding",
      david: "AAH!! THERE'S A BOMB!!!",
      localisations: {
        english: "exploding",
        silly: "BOMBASTIC"
      },
      // THIS FACE HAS NOTHING ON IT!
      face: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAAXNSR0IArs4c6QAAAPJJREFUeF7t0jENAAAMw7CVP+mhyOcC6BF5ZwoEBRZ8ulTgwIIgKQBWktUpWAwkBcBKsjoFi4GkAFhJVqdgMZAUACvJ6hQsBpICYCVZnYLFQFIArCSrU7AYSAqAlWR1ChYDSQGwkqxOwWIgKQBWktUpWAwkBcBKsjoFi4GkAFhJVqdgMZAUACvJ6hQsBpICYCVZnYLFQFIArCSrU7AYSAqAlWR1ChYDSQGwkqxOwWIgKQBWktUpWAwkBcBKsjoFi4GkAFhJVqdgMZAUACvJ6hQsBpICYCVZnYLFQFIArCSrU7AYSAqAlWR1ChYDSQGwkqxOHydZADPuoqlPAAAAAElFTkSuQmCC",
      onUpdate: (shape)=>{
        shape.text = shape.timer

        if(frames % 60 == 0){
          if(shape.timer > 0 && shape.x && shape.visible){
            sounds.tick.play()
          }
          shape.timer -= 1
        }

        if(shape.timer <= 0){
          shapeG.attractTo(shape, -5000)
          sounds.bang2.play()
          shape.remove()
          return;
        }
      },
      onSpawn: (s)=>{
        s.textSize = 10
        s.text = "10"
        s.timer = 10
      }
    },
    {
      name: "unstable",
      david: "This- thing... has zero mass",
      localisations: {
        english: "unstable",
        silly: "???"
      },
      face: "data:image/png;base64,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",
      onSpawn: (s)=>{
        s.mass = 0.1
        s.vel.y = -s.index * 5
        s.startFrame = Number(String(frames))
      },
      onUpdate: (s)=>{
        if(frames == s.startFrame + 160){
          s.mass = 0
        }
      }
    },
    {
      name: "magnet",
      david: "ohhh.... just so attractive",
      localisations: {
        english: "magnet",
        silly: "soulmates fr"
      },
      face: "data:image/png;base64,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",
      onUpdate: (s)=>{
        shapeG.forEach((ss)=>{
          if(s.trait == "magnet" && ss.trait == "magnet"){
            s.attractTo(ss, 100 * s.index)
            ss.attractTo(s, 100 * ss.index)
          }
        })
      }
    },
    {
      name: "growing",
      david: "Oh god no not a growing one",
      localisations: {
        english: "growing",
        silly: "balloon"
      },
      face: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAAAXNSR0IArs4c6QAAA5xJREFUeF7tnA1y4jAMhSUuRvdEPQLsEfZE2z1Wpx3ccUhCCA6W/IeVfcww7VDHlp6+SLZjyoQXFKigAFfoE11CAQJYgKCKAqlgHYnojZnOV6t8N274zbnhsw8i+lfFYnRqQoEUsE43oG4+eqyWnY2A/TahAowsroAKLGb66zOVwooP5+iXoj2atlXgSHR4Y76MlWeRKDIrjwasYKaK6cCOzhciZK6YUO3/LopnauWRgnVkHuZNSS/nhiyHOVeSeuUvmivPev6yPZS68kjBEtG9ZVcq9eUlRY90oJOvIloltDEUgcU8LvlC1kiod8OaUTSW1mG0VymQXHmGNb+i8oiC/RQsoV/OmQLrtn8i9M9Is2aVB2AFiPDZlaeNOSPESMxsmSAAVjgiky7XXd+dvLLBUkxpANb/DJZkfrzSRzqlEYFFRIrafD89GSd9fhVibS9rd/Os7Ix1fWQnYkbUiIiSVxPDYkKxmuio6gCs0PyzMFh+iBMzn7VzWu3+B8CqqoCi8jzaoYmlNGMNo+BZYdWgt+i8WeVRgTV6LqJeQ3cLRTHGrIAofmu9tPFMAcuPuTqPdTMD57H6R3i78mxOK6s9K+xfLVioVUCUubSZajIiNWNpnUD7PhUIV57rRmjWSWCA1WfAzVsFsMyHsE8HAFafcTFvlUWw7vZijO7qlwBnip3/6d+HxdelvkoMkNOHObC2nncZBSy4YanwZRm/Ca4JsM8cMHKv3Q1YXgjpA9Jc0QpcH90BV/oSyl4esJfBZR6s5ckPxZ1egI30LiSnDJRgrbePPFT+7V8vKYvmwIqdtEgMiJSSOdMkHGWax3i4dvxgdZMkxsbx+PWCqSR+S50r2S7R+JImJPcVLidbEc8hQWJiwf4LZN7lhN6D1fxErGWw/GmL3RwdrpBpJ7gui/ui2Rkz02DFyqIk0fTSpgJY3rVmIK11tA7WY9YKzFeewnM3sVn9Z5Ni1D2Pb4HSt2UpwEqNobgcdjAHCtlaKVOlylnsuv1lrI73s8Q3gd3vCcxgAqxi92i8Iw1YxjZ8H5y3BNb6GeE7M/0JhbPj8hLdcV/607Ef0bvIDFiau73ngOzFjxhZACumUPm/i7JWxZVieY8CPe4OLOsBaRL1BoOYASu2GQqgGtCiGMISWJNbOOinCPCrmloE61VaYVyFAgBLIRaayhUAWHKt0FKhAMBSiIWmcgUAllwrtFQoALAUYqGpXAGAJdcKLRUK/ACQhRJC2sh7zAAAAABJRU5ErkJggg==",
      onUpdate: (s)=>{
        if(s.shrinking){
          s.scale -= 0.03
          s.vel.x = (Math.random() * 200) - 100
          s.vel.y = (Math.random() * 200) - 100
          if(s.scale < 0.2) s.remove();
        }else{
          s.scale += 0.001
        }

        if(s.scale > 4){
          sounds.bang2.play()
          s.face.remove()
          s.shrinking = true
        }
      }
    },
  ],
  map: (grounds)=>{
    grounds.collider = 's'
    grounds.color = '#f8f8f8'
    grounds.stroke = "black"

    floor = new grounds.Sprite();
    floor.width = 1005;
    floor.height = 15;
    floor.y = 528 // KEEP THIS VALUE
    floor.layer = 2

    // not reccomended to do it like this. Be smarter!
    sides = [new grounds.Sprite(), new grounds.Sprite()]
    sides[0].width = 15
    sides[0].height = 515
    sides[1].width = 15
    sides[1].height = 515
    sides[0].x = floor.x - 625
    sides[1].x = floor.x + 625
    sides[0].y = floor.y - 220
    sides[1].y = floor.y - 220
    sides[0].rotation = -30
    sides[1].rotation = 30

    sides[0].layer = 1
    sides[1].layer = 1

    flipperL = sides[0]
    flipperR = sides[1]
  },
  runner: ()=>{
    // Any code placed here will run before everything starts up!
  },
  sounds: { // All default sounds are loaded, use this to replace/add some.
    sampleSound: new Audio("data:audio/wav;base64,")
  },
  modName: "Dodecadone",
  modAuthor: "coding398",
  sideLeniance: 50,
  noNextIs: false
}