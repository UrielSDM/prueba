import pymysql

def crearUsuarioBD(usuario):

    conexion = pymysql.connect( host="localhost" , user ="root" , password="root" , db="pruebas" )

    cur = conexion.cursor()

    sql = "INSERT INTO usuario (nombre) VALUES (%s)"

    values = ( usuario["name"] )

    cur.execute( sql , values )

    conexion.commit()

    conexion.close()

    return usuario  