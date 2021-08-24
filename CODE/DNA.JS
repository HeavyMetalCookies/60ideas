
    console.log("[hello4chan]");
    
    function reduce( i_DNA /** a_DNA | b_DNA **/ ){
    
        var r_DNA = "" ; //:Pair reduced to 1 string.
        
        var   t_b ; //:take from top or bottom strand?
        
        for( var i = 0 ; i <=( 32-1 ) ; i++ ){
        
            t_b = Math.floor( Math.random() * 2 );
            r_DNA += i_DNA[ t_b ].charAt( i );
        };;
        
        return( r_DNA );
    };;

    function recombine( a_DNA , b_DNA ){
    
        var o_DNA =[ "" , "" ]; //:Output DNA
        
        o_DNA[ 0 ]=reduce( a_DNA );
        o_DNA[ 1 ]=reduce( b_DNA );
    
        return( o_DNA /** [ c_DNA | d_DNA ] **/ );
    };;

    var original_dna =[
    //:  12345678901234567890123456789012
        "01010101010010001010101000001110"
    ,   "00011111000001110101010101100101"
    ];;
    
    //: Child A & B DNA. Start out as clone of original_dna:
    var a_DNA =[ original_dna[ 0 ] , original_dna[ 1 ] ];
    var b_DNA =[ original_dna[ 0 ] , original_dna[ 1 ] ];
    
    //: c and d become the new a and b eventually.
    var c_DNA =[ "" , "" ]; //:Child #1 of a & b
    var d_DNA =[ "" , "" ]; //:Child #2 of a & b
    
    for( generation = 0 ; generation <= 100 ; generation++ ){
    
        //:Randomly take genes from A & B to make children:
        c_DNA = recombine( a_DNA , b_DNA );
        d_DNA = recombine( a_DNA , b_DNA );
        
        //:Children become the new A & B for another round
        //:of inbreeding.
        a_DNA = c_DNA ;
        b_DNA = d_DNA ;
    
    };;
    
    console.log( "[a_DNA]:" , a_DNA );
    console.log( "[b_DNA]:" , b_DNA );