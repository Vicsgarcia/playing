const Newsletter= require ('../models/Newsletter');

function suscribeEmail(req,res){
    const newsletter = new Newsletter();
    const {email} = req.params;

    

    if(!email){
        res.status(404).send({message:"Se necesita un email"})
    } else{
        newsletter.email = email.toLowerCase();
        newsletter.save((err,newsletterStored)=>{
                if(err){
                    res.status(500).send({message:"Este email ya existe"})
                }else{
                    if(!newsletterStored){
                        res.status(404).send({message:"Error al registrar email"})
                    } else{
                        res.status(200).send({message:"Email añadido correctamente a la Newsletter"})
                    }
                }
            })
    };
}

module.exports={
    suscribeEmail
}