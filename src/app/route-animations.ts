import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes
} from '@angular/animations';


export const slideUp =
  trigger ('routeAnimations', [
    transition('* <=> *', [
      query (':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
//          transform: 'scale(0) translateX(100%)',
          transform: 'translateY(100%)',
        })
      ]),
      query ( ':enter', [
        animate('500ms ease',
          style({
            opacity: 1,
            // transform: 'scale(1) translateX(0)'
            transform: 'translateY(0)'
          }))
      ])
    ])
  ]);
