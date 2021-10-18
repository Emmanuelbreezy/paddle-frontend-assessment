import Image from 'next/image';

export function TestimonialCard(props){
    const card = props.active ? 'card shadow testi__active' : 'card shadow-sm ';
    return(
        <div className={card}>
        <div className="card-body py-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <div className="testi__avatar">
                  <Image src={props.image} placeholder="blur" />
                </div>
                <div className="testi__user">
                  <h3>{props.username}</h3>
                  <span>{props.location}</span>
                </div>
            </div>
            <div className="d-flex testi__rating align-items-center">
               <span className="pe-3">{props.rating}</span>
               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.1891 5.41808L9.22187 4.84152L7.44844 1.24621C7.4 1.14777 7.32031 1.06808 7.22187 1.01965C6.975 0.897772 6.675 0.999334 6.55156 1.24621L4.77812 4.84152L0.810936 5.41808C0.701561 5.43371 0.601561 5.48527 0.524999 5.5634C0.432439 5.65853 0.381434 5.78652 0.383192 5.91924C0.38495 6.05197 0.439327 6.17856 0.534374 6.27121L3.40469 9.06965L2.72656 13.0212C2.71066 13.1131 2.72083 13.2077 2.75592 13.2941C2.79102 13.3805 2.84963 13.4554 2.92511 13.5102C3.00059 13.5651 3.08992 13.5976 3.18297 13.6043C3.27602 13.6109 3.36907 13.5913 3.45156 13.5478L7 11.6821L10.5484 13.5478C10.6453 13.5993 10.7578 13.6165 10.8656 13.5978C11.1375 13.5509 11.3203 13.2931 11.2734 13.0212L10.5953 9.06965L13.4656 6.27121C13.5437 6.19465 13.5953 6.09465 13.6109 5.98527C13.6531 5.71183 13.4625 5.45871 13.1891 5.41808Z" fill="#FEA250"/>
                </svg>
            </div>
          </div>
          <div className="mt-2 testi__desc">
            <p className="mb-0">
                {props.text}
              </p>
          </div>
        </div>
      </div>
    );
 }